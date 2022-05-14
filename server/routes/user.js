const express = require('express');
const router = express.Router();
const User = require('/Users/victoregazi/Desktop/RestApi/modelss/User.js');

router.get('/home', (req, res) => {
    res.render('home');
});

// Create Data
router.post('/home', (req, res) => {
    const user = new User({
        meter: req.body.meter,
        old: req.body.old,
        newmeter: req.body.newmeter,
        textarea: req.body.textarea
    })
    user
       .save(user)
       .then((data) => {
           res.render('/Users/victoregazi/Desktop/RestApi/views/partials/dashboard.hbs')
       })
});

router.get('/main', (req, res) => {
    User.find({meter: 'meter'}, (error, data) => {
        if(error){
            console.log(error);
        } else{
            console.log(data);
        }
    })
})

module.exports = router;
