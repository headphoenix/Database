const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        required: true, 
        enum: ['admin', 'regional coordinator', 'bacenta leader', 'fellowship leader'] 
    },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    bacenta: { type: mongoose.Schema.Types.ObjectId, ref: 'Bacenta' },
    constituency: { type: mongoose.Schema.Types.ObjectId, ref: 'Constituency' },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    data: { type: Object }
});

userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});


userSchema.methods.comparePassword = async function(candidatePassword, next) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
