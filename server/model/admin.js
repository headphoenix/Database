const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    regions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region'
    }],
    culmination_data: {
        type: Object
    }
});
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
