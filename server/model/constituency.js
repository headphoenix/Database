const mongoose = require('mongoose');

const constituencySchema = new mongoose.Schema({
    constituency_leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bacentas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bacenta'
    }],
    culmination_data: {
        type: Object
    }
});
const Constituency = mongoose.model('Constituency', constituencySchema);

module.exports = Constituency;