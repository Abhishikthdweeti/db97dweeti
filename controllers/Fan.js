var fan = require('../models/Fan');
// List of all Costumes 
exports.fan_list = async function(req, res) { 
    try{ 
        thefans = await fan.find(); 
        res.send(thefans); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific fan.
exports.fan_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id);
};
// Handle fan create on POST.
exports.fan_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: fan create POST');
};
// Handle fan delete form on DELETE.
exports.fan_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id);
};
// Handle fan update form on PUT.
exports.fan_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function(req, res) {
    try{
    thefans = await fan.find();
    res.render('Fan', { title: 'fan Search Results', results: thefans });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };