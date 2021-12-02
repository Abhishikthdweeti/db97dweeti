var express = require('express');
const fan_controlers= require('../controllers/Fan')
var router = express.Router();
/* GET fan */
router.get('/', fan_controlers.fan_view_all_Page);

/* GET detail fan page */
router.get('/detail', fan_controlers.fan_view_one_Page);
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET create fan page */
router.get('/create',secured, fan_controlers.fan_create_Page);

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }



/* GET create update page */
router.get('/update',secured , fan_controlers.fan_update_Page);

/* GET create fan page */
router.get('/delete',secured, fan_controlers.fan_delete_Page);

module.exports = router;