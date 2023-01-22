const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Admin = require('../model/admin');
const Region = require('../model/region');

router.post('/region', auth, async (req, res) => {
    try {
        const region = new Region(req.body);
        await region.save();
        res.status(201).json({ region });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/invite', auth, async (req, res) => {
    try {
        // code to invite user by email
        res.status(201).json({ message: 'Invitation sent' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/user/:id', auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

