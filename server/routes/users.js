const express = require('express');
const router = express.Router();
const UserModel = require('../mongo/schema').getModel('User');
const utils = require('utility');

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
      UserModel.create({ user, password: md5Passworld(password), type }, (error, doc) => {
        if (error) {
          return response.json({ code: 1, message: '后端出现错误!' });
        } else {
          return response.json({ code: 0, data: doc });
        }
      });
    }
  });
});

router.post('/login', (request, response) => {
  const { user, password } = request.body;
  UserModel.findOne({ user, password: md5Passworld(password) }, { password: 0 }, (error, doc) => {
    if (!doc) {
      return response.json({ code: 1, message: '用户名和密码不匹配' });
    }
    if (error) {
      return response.json({ code: 1, message: '后端出现错误!' });
    }
    return response.json({ code: 0, data: doc });
  });
});

/* GET users listing. */
router.get('/info', (request, response, next) => {
  return response.json({ code: 1 });
});

module.exports = router;
