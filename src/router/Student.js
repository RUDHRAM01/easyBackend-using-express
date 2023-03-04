const express = require('express');
const router = express.Router();
const Studentmodel = require('../model/Student');

router.post('/student', (req, res) => {
    console.log('call');
    const student = new Studentmodel(req.body);
    student.save().then(() => { res.send(student) }).catch((e) => { res.send(e) });
});


router.get('/student', (req, res) => {
    console.log('call');
    Studentmodel.find().then((student) => { res.json(student)}).catch((e) => { res.send(e) });
})


module.exports = router;