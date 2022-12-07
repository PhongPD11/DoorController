const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Property = new Schema({
    name: { type: String, default: 'unknown' },
    age: { type: Number, default: 0 },
    phone: { type: Number, default: 'unknown' },
    email: { type: String, default: 'unknown' },
    github: { type: String, default: 'unknown' },
    address: { type: String, default: 'unknown' },
    university: { type: String, default: 'unknown' },
    avatar: { type: String, default: 'unknown' },
});

module.exports = mongoose.model('Property', Property);