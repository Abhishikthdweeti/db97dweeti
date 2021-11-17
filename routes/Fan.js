var express = require('express');
const fan_controlers= require('../controllers/Fan')
var router = express.Router();
/* GET fan */
router.get('/', fan_controlers.fan_view_all_Page);

/* GET detail fan page */
router.get('/detail', fan_controlers.fan_view_one_Page);
module.exports = router;