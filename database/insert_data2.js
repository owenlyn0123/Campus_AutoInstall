var url = "mongodb://localhost:27017/campus_guard";
var db = connect(url);

db.createCollection('academic_year')
db.createCollection('attendance')
db.createCollection('ban_ci')
db.createCollection('company')
db.createCollection('department')
db.createCollection('face')
db.createCollection('grade')
db.createCollection('greeter')
db.createCollection('guardian')
db.createCollection('recognize_record')
db.createCollection('schedule')
db.createCollection('stranger')
db.createCollection('student')
db.createCollection('user')
db.createCollection('wechat_message_guardian_phone')
db.createCollection('wechat_message_record')
db.createCollection('holiday')
db.createCollection('system_config')
db.createCollection('sync_tolerance')
db.createCollection('facepad')
db.createCollection('facepad_recognize_record')
db.createCollection('facepad_group')
db.createCollection('grant_person')
db.createCollection('sys_log')
db.createCollection('leave_permit')
db.createCollection('release_record')

