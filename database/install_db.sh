#!/bin/bash

#install mongodb4.0.9
function install_db()
{
	pushd ./database
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
	echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list
	sudo apt update
	sudo apt install -y mongodb-org=4.0.9 mongodb-org-server=4.0.9 mongodb-org-shell=4.0.9 mongodb-org-mongos=4.0.9 mongodb-org-tools=4.0.9

	#copy mongo cofiguration file
	sudo cp mongod.conf /etc/mongod.conf

	sudo systemctl enable mongod 
	sudo systemctl restart mongod
	sleep 10
	#init mongodb
	host_name=`hostname`
	mongo <<EOF
db.adminCommand( { getParameter: 1, featureCompatibilityVersion: 1 } )
db.adminCommand( { setFeatureCompatibilityVersion: "4.0" } )
var config={
	 _id:"rs0",
	 members:[
		 {_id:0,host:"${host_name}:27017"}
]};
rs.initiate(config)
EOF
	sleep 10
	#init mongodb data
	mongo <<EOF
load("insert_data2.js")
load("insert_data.js")
EOF
	popd
}
