const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Constituency = require('../models/constituency');
const User = require('../models/user');
const Bacenta = require('../models/bacenta');

router.get('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Return the Constituency data
        res.json({ constituency });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id/edit-data', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Edit the Constituency data
        constituency.name = req.body.name;
        constituency.bacentas = req.body.bacentas;
        await constituency.save();
        res.json({ constituency });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/invite-bacenta-leader', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Code to invite a Bacenta leader by email
        res.status(201).json({ message: 'Invitation sent' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id/add-bacenta', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Add a new Bacenta to the Constituency
        const bacenta = new Bacenta(req.body);
        constituency.bacentas.push(bacenta);
        await constituency.save();
        res.json({ constituency });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id/cumulative-data', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Calculate and return the cumulative data from all Bacentas
        let cumulativeData = {};
        constituency.bacentas.forEach(bacenta => {
            // Add the data from each Bacenta to the cumulativeData object
            // ...
        });
        res.json({ cumulativeData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/:id/bacenta/:bacentaId', auth, async (req, res) => {
    try {
        // Check if the user is a Constituency leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'constituency leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Find the Bacenta by ID
        const bacenta = constituency.bacentas.find(bacenta => bacenta.id === req.params.bacentaId);
        if (!bacenta) {
            return res.status(404).json({ message: 'Bacenta not found' });
        }
        // Update the Bacenta's data
        bacenta.set(req.body);
        await constituency.save();
        res.json({ bacenta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
