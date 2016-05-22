var mongodb = require('./db');

function Questionscore(questionscore) {
  this.name = questionscore.name;
  this.Ascore1 = questionscore.Ascore1;
  this.Ascore2 = questionscore.Ascore2;
  this.Ascore3 = questionscore.Ascore3;
  this.Ascore4 = questionscore.Ascore4;
  this.Ascore5 = questionscore.Ascore5;
  this.Ascore6 = questionscore.Ascore6;
  this.Ascore7 = questionscore.Ascore7;
  this.Ascore8 = questionscore.Ascore8;
  this.Bscore1 = questionscore.Bscore1;
  this.Bscore2 = questionscore.Bscore2;
  this.Bscore3 = questionscore.Bscore3;
  this.Bscore4 = questionscore.Bscore4;
  this.Bscore5 = questionscore.Bscore5;
  this.Bscore6 = questionscore.Bscore6;
  this.Bscore7 = questionscore.Bscore7;
  this.Bscore8 = questionscore.Bscore8;
  this.Cscore1 = questionscore.Cscore1;
  this.Cscore2 = questionscore.Cscore2;
  this.Cscore3 = questionscore.Cscore3;
  this.Cscore4 = questionscore.Cscore4;
  this.Cscore5 = questionscore.Cscore5;
  this.Cscore6 = questionscore.Cscore6;
  this.Cscore7 = questionscore.Cscore7;
  this.Dscore1 = questionscore.Dscore1;
  this.Dscore2 = questionscore.Dscore2;
  this.Dscore3 = questionscore.Dscore3;
  this.Dscore4 = questionscore.Dscore4;
  this.Dscore5 = questionscore.Dscore5;
  this.Dscore6 = questionscore.Dscore6;
  this.Dscore7 = questionscore.Dscore7;
  this.Dscore8 = questionscore.Dscore8;
  this.Escore1 = questionscore.Escore1;
  this.Escore2 = questionscore.Escore2;
  this.Escore3 = questionscore.Escore3;
  this.Escore4 = questionscore.Escore4;
  this.Escore5 = questionscore.Escore5;
  this.Escore6 = questionscore.Escore6;
  this.Escore7 = questionscore.Escore7;
  this.Escore8 = questionscore.Escore8;
  this.Fscore1 = questionscore.Fscore1;
  this.Fscore2 = questionscore.Fscore2;
  this.Fscore3 = questionscore.Fscore3;
  this.Fscore4 = questionscore.Fscore4;
  this.Fscore5 = questionscore.Fscore5;
  this.Fscore6 = questionscore.Fscore6;
  this.Gscore1 = questionscore.Gscore1;
  this.Gscore2 = questionscore.Gscore2;
  this.Gscore3 = questionscore.Gscore3;
  this.Gscore4 = questionscore.Gscore4;
  this.Gscore5 = questionscore.Gscore5;
  this.Gscore6 = questionscore.Gscore6;
  this.Gscore7 = questionscore.Gscore7;
  this.Gscore8 = questionscore.Gscore8;
  this.Hscore1 = questionscore.Hscore1;
  this.Hscore2 = questionscore.Hscore2;
  this.Hscore3 = questionscore.Hscore3;
  this.Hscore4 = questionscore.Hscore4;
  this.Hscore5 = questionscore.Hscore5;
  this.Hscore6 = questionscore.Hscore6;
  this.Hscore7 = questionscore.Hscore7;
  this.Iscore1 = questionscore.Iscore1;
  this.Iscore2 = questionscore.Iscore2;
  this.Iscore3 = questionscore.Iscore3;
  this.Iscore4 = questionscore.Iscore4;
  this.Iscore5 = questionscore.Iscore5;
  this.Iscore6 = questionscore.Iscore6;
  this.Iscore7 = questionscore.Iscore7;
}

module.exports = Questionscore;

//存储Questionscore
Questionscore.prototype.save = function(callback) {
  //要存入数据库的文档
  var questionscore = {
      name: this.name,
      Ascore1 : this.Ascore1,
      Ascore2 : this.Ascore2,
      Ascore3 : this.Ascore3,
      Ascore4 : this.Ascore4,
      Ascore5 : this.Ascore5,
      Ascore6 : this.Ascore6,
      Ascore7 : this.Ascore7,
      Ascore8 : this.Ascore8,
      Bscore1 : this.Bscore1,
      Bscore2 : this.Bscore2,
      Bscore3 : this.Bscore3,
      Bscore4 : this.Bscore4,
      Bscore5 : this.Bscore5,
      Bscore6 : this.Bscore6,
      Bscore7 : this.Bscore7,
      Bscore8 : this.Bscore8,
      Cscore1 : this.Cscore1,
      Cscore2 : this.Cscore2,
      Cscore3 : this.Cscore3,
      Cscore4 : this.Cscore4,
      Cscore5 : this.Cscore5,
      Cscore6 : this.Cscore6,
      Cscore7 : this.Cscore7,
      Dscore1 : this.Dscore1,
      Dscore2 : this.Dscore2,
      Dscore3 : this.Dscore3,
      Dscore4 : this.Dscore4,
      Dscore5 : this.Dscore5,
      Dscore6 : this.Dscore6,
      Dscore7 : this.Dscore7,
      Dscore8 : this.Dscore8,
      Escore1 : this.Escore1,
      Escore2 : this.Escore2,
      Escore3 : this.Escore3,
      Escore4 : this.Escore4,
      Escore5 : this.Escore5,
      Escore6 : this.Escore6,
      Escore7 : this.Escore7,
      Escore8 : this.Escore8,
      Fscore1 : this.Fscore1,
      Fscore2 : this.Fscore2,
      Fscore3 : this.Fscore3,
      Fscore4 : this.Fscore4,
      Fscore5 : this.Fscore5,
      Fscore6 : this.Fscore6,
      Gscore1 : this.Gscore1,
      Gscore2 : this.Gscore2,
      Gscore3 : this.Gscore3,
      Gscore4 : this.Gscore4,
      Gscore5 : this.Gscore5,
      Gscore6 : this.Gscore6,
      Gscore7 : this.Gscore7,
      Gscore8 : this.Gscore8,
      Hscore1 : this.Hscore1,
      Hscore2 : this.Hscore2,
      Hscore3 : this.Hscore3,
      Hscore4 : this.Hscore4,
      Hscore5 : this.Hscore5,
      Hscore6 : this.Hscore6,
      Hscore7 : this.Hscore7,
      Iscore1 : this.Iscore1,
      Iscore2 : this.Iscore2,
      Iscore3 : this.Iscore3,
      Iscore4 : this.Iscore4,
      Iscore5 : this.Iscore5,
      Iscore6 : this.Iscore6,
      Iscore7 : this.Iscore7
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 Questionscore 集合
    db.collection('questionscore', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 Questionscore 集合
      collection.insert(questionscore, {
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

//读取用户问卷三信息
Questionscore.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 Questionscore 集合
    db.collection('questionscore', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, questionscore) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, questionscore);//成功！返回查询的用户信息
      });
    });
  });
};

Questionscore.update = function(name,questionscore, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questionscore', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: questionscore.name,
      Ascore1 : questionscore.Ascore1,
  Ascore2 : questionscore.Ascore2,
  Ascore3 : questionscore.Ascore3,
  Ascore4 : questionscore.Ascore4,
  Ascore5 : questionscore.Ascore5,
  Ascore6 : questionscore.Ascore6,
  Ascore7 : questionscore.Ascore7,
  Ascore8 : questionscore.Ascore8,
  Bscore1 : questionscore.Bscore1,
  Bscore2 : questionscore.Bscore2,
  Bscore3 : questionscore.Bscore3,
  Bscore4 : questionscore.Bscore4,
  Bscore5 : questionscore.Bscore5,
  Bscore6 : questionscore.Bscore6,
  Bscore7 : questionscore.Bscore7,
  Bscore8 : questionscore.Bscore8,
  Cscore1 : questionscore.Cscore1,
  Cscore2 : questionscore.Cscore2,
  Cscore3 : questionscore.Cscore3,
  Cscore4 : questionscore.Cscore4,
  Cscore5 : questionscore.Cscore5,
  Cscore6 : questionscore.Cscore6,
  Cscore7 : questionscore.Cscore7,
  Dscore1 : questionscore.Dscore1,
  Dscore2 : questionscore.Dscore2,
  Dscore3 : questionscore.Dscore3,
  Dscore4 : questionscore.Dscore4,
  Dscore5 : questionscore.Dscore5,
  Dscore6 : questionscore.Dscore6,
  Dscore7 : questionscore.Dscore7,
  Dscore8 : questionscore.Dscore8,
  Escore1 : questionscore.Escore1,
  Escore2 : questionscore.Escore2,
  Escore3 : questionscore.Escore3,
  Escore4 : questionscore.Escore4,
  Escore5 : questionscore.Escore5,
  Escore6 : questionscore.Escore6,
  Escore7 : questionscore.Escore7,
  Escore8 : questionscore.Escore8,
  Fscore1 : questionscore.Fscore1,
  Fscore2 : questionscore.Fscore2,
  Fscore3 : questionscore.Fscore3,
  Fscore4 : questionscore.Fscore4,
  Fscore5 : questionscore.Fscore5,
  Fscore6 : questionscore.Fscore6,
  Gscore1 : questionscore.Gscore1,
  Gscore2 : questionscore.Gscore2,
  Gscore3 : questionscore.Gscore3,
  Gscore4 : questionscore.Gscore4,
  Gscore5 : questionscore.Gscore5,
  Gscore6 : questionscore.Gscore6,
  Gscore7 : questionscore.Gscore7,
  Gscore8 : questionscore.Gscore8,
  Hscore1 : questionscore.Hscore1,
  Hscore2 : questionscore.Hscore2,
  Hscore3 : questionscore.Hscore3,
  Hscore4 : questionscore.Hscore4,
  Hscore5 : questionscore.Hscore5,
  Hscore6 : questionscore.Hscore6,
  Hscore7 : questionscore.Hscore7,
  Iscore1 : questionscore.Iscore1,
  Iscore2 : questionscore.Iscore2,
  Iscore3 : questionscore.Iscore3,
  Iscore4 : questionscore.Iscore4,
  Iscore5 : questionscore.Iscore5,
  Iscore6 : questionscore.Iscore6,
  Iscore7 : questionscore.Iscore7}
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        
        callback(null);
      });
    });
  });
};