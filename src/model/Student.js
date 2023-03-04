const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema({
    name: 'string',
    age: 'number',
    phone: 'string',
    email: 'string',
    address: 'string',
    city: 'string',
    state: 'string',
    country: 'string',
    pincode: 'string',
    password: 'string',
});


const StudentModel = mongoose.model('Student', Student);


module.exports = StudentModel;