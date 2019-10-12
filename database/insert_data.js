var url = "mongodb://localhost:27017/campus_guard";
var db = connect(url);

db.createCollection('department')

db.getCollection('department').insert({
    "_id" : "ac413818677d8189ac4c89",
    "p_id" : "",
    "name" : "KANKAN AI",
    "address" : "",
    "zip_code" : "",
    "phone" : "",
    "linkman" : "",
    "linkman_phone" : "",
    "description" : "",
    "created_time" : NumberLong(1530261990640)
})

// ############   20181224 新增多公司功能  添加   开始  ########################

db.getCollection('company').insert({
    "_id" : "1",
    "name" : "root-company",
    "status" : 1,
    "login_name" : "root"
})

db.getCollection('user').insert({
    "_id" : "181ab213bb21",
    "name" : "root",
    "job_number" : "0000",
    "identity_card" : "",
    "login_name" : "root",
    "password" : "21232f297a57a5a743894a0e4a801fc3",
    "gender" : 1.0,
    "birthday" : NumberLong(0),
    "avatar_id" : "",
    "phone" : "",
    "email" : "",
    "position" : "",
    "open_door" : 0.0,
    "reminder_type" : 0.0,
    "reminder_content" : "",
    "card_id" : "",
    "status" : 1.0,
    "role" : "root",
    "token" : "root",
    "created_time" : NumberLong(1528429616997),
    "pad_relation" : null,
    "pad_relation_updateTime" : null,
    "greeter_relation" : null,
    "greeter_relation_updateTime" : null,
    "company_id" : "1",
    "dep_ids" : []
})
// ############   20181224 新增多公司功能  添加   结束  ########################
