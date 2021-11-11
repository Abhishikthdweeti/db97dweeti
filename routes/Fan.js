var express = require('express');
const fan_controlers= require('../controllers/Fan')
var router = express.Router();
/* GET fan */
router.get('/', fan_controlers.fan_view_all_Page);

module.exports = router;