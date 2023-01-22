const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    region_leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    constituencies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Constituency'
    }],
    culmination_data: {
        type: Object
    }
});
const Region = mongoose.model('Region', regionSchema);

module.exports = Region;
