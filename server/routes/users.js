const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/info', function(request, response, next) {
  return response.json({ code:1 });
});

module.exports = router;
