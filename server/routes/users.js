const express = require('express');
const router = express.Router();
const UserModel = require('../mongo/schema').getModel('User');
const utils = require('utility');

const _filter = { password: 0, _v: 0 };

function md5Passworld (password) {
  const salt = 'ChrisWen_extra_string!960216@#Great!';
  return utils.md5(utils.md5(password + salt));
}

router.get('/list', (request, response) => {
  UserModel.find({}, (err, doc) => {
    return response.json(doc);
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
  const { body } = request.body;
  if (!userId) {
    return response.json({ code: 1, message: '请先登录~' });
  }
  UserModel.findByIdAndUpdate();
});

/* GET users listing. */
router.get('/info', (request, response, next) => {
  const { userId } = request.cookie;
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

module.exports = router;
