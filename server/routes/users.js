const express = require('express');
const router = express.Router();
const UserModel = require('../mongo/schema').getModel('User');

router.get('/list', (request, response) => {
  UserModel.find({}, (err, doc) => {
    return response.json(doc);
  });
});

router.post('/register', (request, response) => {
  const { user, password, type } = request.body;
  UserModel.findOne({ user:user }, (err, doc) => {
    if(doc){
      return response.json({ code: 1, message:'用户已经存在' });
    } else {
      UserModel.create({ user, password, type }, (error, d) => {
        if(error){
          return response.json({ code:1, message:'后端出现错误!' });
        } else {
          return response.json({ code:0 });
        }
      });
    }
  });
});

/* GET users listing. */
router.get('/info', (request, response, next) => {
  return response.json({ code:1 });
});

module.exports = router;
