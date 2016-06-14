var mongodb = require('./db');

function Questionone(questionone) {
  this.name = questionone.name;
  this.sex = questionone.sex;
  this.age = questionone.age;
  this.matrimony = questionone.matrimony;
  this.nation = questionone.nation;
  this.province = questionone.province;
  this.city = questionone.city;
  this.tel = questionone.tel;
  this.idcard = questionone.idcard;
  this.security = questionone.security;
  this.insurance = questionone.insurance;
  this.email = questionone.email;
  this.address = questionone.address;
  this.job = questionone.job;
  this.education = questionone.education;
  this.vision1 = questionone.vision1;
  this.vision2 = questionone.vision2;
  this.height = questionone.height;
  this.weight1 = questionone.weight1;
  this.weight2 = questionone.weight2;
  this.lowbloodpre = questionone.lowbloodpre;
  this.highbloodpre = questionone.highbloodpre;
  this.bloodfat = questionone.bloodfat;
  this.bloodsugar = questionone.bloodsugar;
}

module.exports = Questionone;

//存储questionone
Questionone.prototype.save = function(callback) {
  //要存入数据库的文档
  var questionone = {
      name: this.name,
      sex: this.sex,
      age:this.age,
      matrimony: this.matrimony,
      nation: this.nation,
      province: this.province,
      city: this.city,
      tel: this.tel,
      idcard:this.idcard,
      security: this.security,
      insurance: this.insurance,
      email:this.email,
      address: this.address,
      job: this.job,
      education: this.education,
      vision1: this.vision1,
      vision2: this.vision2,
      height: this.height,
      weight1: this.weight1,
      weight2: this.weight2,
      lowbloodpre: this.lowbloodpre,
      highbloodpre: this.highbloodpre,
      bloodfat: this.bloodfat,
      bloodsugar: this.bloodsugar
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questionone', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 questionone 集合
      collection.insert(questionone, {
        safe: true
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null);//返回 err 为 null
      });
    });
  });
};

//读取用户问卷一信息
Questionone.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 Questionone 集合
    db.collection('questionone', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }

      //查找用户名（name键）值为 name 一个文档     
      collection.findOne({
        name: name
      }, function (err, questionone) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, questionone);//成功！返回查询的用户信息
      });
    });
  });
};

//读取所有用户问卷一信息
Questionone.getAll = function(callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 Questionone 集合
    db.collection('questionone', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      collection.find({
      },{
        "name": 1,
        "sex": 1,
        "age": 1,
        "tel": 1,
        "idcard": 1
      }).toArray(function (err, docs) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, docs);
      });
    });
  });
};

Questionone.update = function(name,questionone, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questionone', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: questionone.name,
      sex: questionone.sex,
      age:questionone.age,
      matrimony: questionone.matrimony,
      nation: questionone.nation,
      province: questionone.province,
      city: questionone.city,
      tel: questionone.tel,
      idcard:questionone.idcard,
      security: questionone.security,
      insurance: questionone.insurance,
      email:questionone.email,
      address: questionone.address,
      job: questionone.job,
      education: questionone.education,
      vision1: questionone.vision1,
      vision2: questionone.vision2,
      height: questionone.height,
      weight1: questionone.weight1,
      weight2: questionone.weight2,
      lowbloodpre: questionone.lowbloodpre,
      highbloodpre: questionone.highbloodpre,
      bloodfat: questionone.bloodfat,
      bloodsugar: questionone.bloodsugar}
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        console.log(questionone);
        callback(null);
      });
    });
  });
};