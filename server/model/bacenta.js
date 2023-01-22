const mongoose = require('mongoose');

const bacentaSchema = new mongoose.Schema({
    bacenta_leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fellowships: [{
        name: {type: String, required: true},
        weekday_attendance_number: {type: Number},
        income: {type: Number},
        weekend_attendance_number: {type: Number}
    }]
});
const Bacenta = mongoose.model('Bacenta', bacentaSchema);

module.exports = Bacenta;