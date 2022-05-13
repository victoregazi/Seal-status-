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
        newmeter: req.body.newmeter
    })
    user
       .save(user)
       .then((data) => {
           res.render('/Users/victoregazi/Desktop/RestApi/views/partials/dashboard.hbs')
       })
});

//search data
router.post('home', (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        User.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        User.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
})

module.exports = router;
