const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const models = {
  User:{
    user: { type:String, require: true },
    password: { type:String, require: true },
    type: { type:String, require: true },
    avatar: { type:String },
    description: { type:String },
    jobName: { type:String },
    //以下BOSS专属
    company:{ type:String },
    salary:{ type:String }
  },
  Chat:{

  }
};

for (const k in models) {
  mongoose.model(k, new Schema(models[k]));
}

module.exports = {
  getModel: function (modelName) {
    return mongoose.model(modelName);
  }
};