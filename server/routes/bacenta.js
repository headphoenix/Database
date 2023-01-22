const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Bacenta = require('../model/bacenta');
const User = require('../model/user');

router.put('/:id/input-data', auth, async (req, res) => {
    try {
        // Check if the user is a Bacenta leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'bacenta leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Bacenta by ID
        const bacenta = await Bacenta.findById(req.params.id);
        if (!bacenta) {
            return res.status(404).json({ message: 'Bacenta not found' });
        }
        // Input data for the Bacenta
        bacenta.attendance = req.body.attendance;
        bacenta.income = req.body.income;
        bacenta.weekendAttendance = req.body.weekendAttendance;
        await bacenta.save();
        res.json({ bacenta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id/data', auth, async (req, res) => {
    try {
        // Check if the user is a Bacenta leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'bacenta leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Bacenta by ID
        const bacenta = await Bacenta.findById(req.params.id);
        if (!bacenta) {
            return res.status(404).json({ message: 'Bacenta not found' });
        }
        // Return the data of the Bacenta
        res.json({ bacenta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
