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

router.get('/data', auth, async (req, res) => {
    try {
        const data = await Region.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/data/:id', auth, async (req, res) => {
    try {
        const data = await Region.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/data/:id', auth, async (req, res) => {
    try {
        const data = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/data/:id', auth, async (req, res) => {
    try {
        const data = await Region.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/cumulative-data', auth, async (req, res) => {
    try {
        // retrieve cumulative data from all collections in the database
        const users = await User.countDocuments();
        const regions = await Region.countDocuments();
        // add more collections here as needed
        const cumulativeData = {
            users: users,
            regions: regions
            // add more data here as needed
        };
        res.json(cumulativeData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/role/:id', auth, async (req, res) => {
    try {
        // retrieve individual data for the specified role
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/role/:id', auth, async (req, res) => {
    try {
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.json(role);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/region/:id', auth, async (req, res) => {
    try {
        const region = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!region) {
            return res.status(404).json({ message: 'Region not found' });
        }
        res.json(region);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/region/:id', auth, async (req, res) => {
    try {
        const region = await Region.findByIdAndDelete(req.params.id);
        if (!region) {
            return res.status(404).json({ message: 'Region not found' });
        }
        res.json({ message: 'Region deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

