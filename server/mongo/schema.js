const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const models = {
  User: {
    user: { type: String, require: true },
    password: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    description: { type: String },
    jobName: { type: String },
    //以下BOSS专属
    company: { type: String },
    salary: { type: String }
  },
  Chat: {
    chat_id: { type: String, require: true },
    from: { type: String, require: true },
    to: { type: String, require: true },
    read: { type: Boolean, require: true, default: false },
    content: { type: String, require: true },
    create_time: { type: Number, default: new Date().getTime() }
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