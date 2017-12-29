const express = require('express');
const router = express.Router();
const UserModel = require('../mongo/schema').getModel('User');
const ChatModel = require('../mongo/schema').getModel('Chat');
const utils = require('utility');

const _filter = { password: 0, _v: 0 };

function md5Passworld (password) {
  const salt = 'ChrisWen_extra_string!960216@#Great!';
  return utils.md5(utils.md5(password + salt));
}

router.get('/list', (request, response) => {
  const { type } = request.query;
  UserModel.find({ type }, (err, doc) => {
    return response.json({ code: 0, data: doc });
  });
});

router.post('/register', (request, response) => {
  const { user, password, type } = request.body;
  UserModel.findOne({ user: user }, (error, doc) => {
    if (error) {
      return response.json({ code: 1, message: '后端出现错误!' });
    }
    if (doc) {
      return response.json({ code: 1, message: '用户已经存在' });
    } else {
      const userModel = new UserModel({ user, password: md5Passworld(password), type });
      userModel.save((error, doc) => {
        if (error) {
          return response.json({ code: 1, message: '后端出现错误!' });
        } else {
          const { user, type, _id } = doc;
          response.cookie('userId', _id);
          return response.json({ code: 0, data: { user, type, _id } });
        }
      });
    }
  });
});

router.post('/login', (request, response) => {
  const { user, password } = request.body;
  UserModel.findOne({ user, password: md5Passworld(password) }, _filter, (error, doc) => {
    if (!doc) {
      return response.json({ code: 1, message: '用户名和密码不匹配' });
    }
    if (error) {
      return response.json({ code: 1, message: '后端出现错误!' });
    }
    response.cookie('userId', doc._id);
    return response.json({ code: 0, data: doc });
  });
});

router.post('/update', (request, response) => {
  const { userId } = request.cookies;
  const { body } = request;
  if (!userId) {
    return response.json({ code: 1, message: '请先登录~' });
  }
  UserModel.findByIdAndUpdate(userId, body, (error, doc) => {
    const { user, type } = doc;
    const data = Object.assign({}, {
      user: user,
      type: type
    }, body );
    return response.json({ code: 0, data: data });
  });
});

/* GET users listing. */
router.get('/info', (request, response, next) => {
  const { userId } = request.cookies;
  if (!userId) {
    return response.json({ code: 1, message: '请先登录' });
  }
  UserModel.findOne({ _id: userId }, _filter, (error, doc) => {
    if (error) {
      return response.json({ code: 1, message: '后端出现错误!' });
    }
    if (doc) {
      return response.json({ code: 0, data: doc });
    }
  });
});

router.get('/getmsglist', (request, response) => {
  const user = request.cookies.user;
  ChatModel.find({ '$or': [{ from: user, to: user }] },  (error, doc) => {
    if (!error) {
      return response.json({ code: 0, data: doc });
    }
  });
});

module.exports = router;
