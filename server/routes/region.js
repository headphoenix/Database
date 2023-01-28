const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../model/user');
const Constituency = require('../model/constituency');

router.get('/', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find all Constituencies under the Region leader
        const constituencies = await Constituency.find({ region: user.region });
        res.json(constituencies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Check if the Constituency is under the Region leader's region
        if (constituency.region.toString() !== user.region.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json(constituency);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Create a new Constituency and set the region to the Region leader's region
        const newConstituency = new Constituency({
            ...req.body,
            region: user.region
        });
        // Save the new Constituency
        const constituency = await newConstituency.save();
        res.json(constituency);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        let constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Check if the Constituency is under the Region leader's region
        if (constituency.region.toString() !== user.region.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Update the Constituency
        constituency = await Constituency.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(constituency);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Check if the Constituency is under the Region leader's region
        if (constituency.region.toString() !== user.region.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the data of the Constituency and all Bacentas under it
        const data = {
            constituency: constituency,
            bacentaData: await Bacenta.find({ constituency: constituency.id })
        };
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/invite', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Create a new Constituency under the Region leader's region
        const newConstituency = new Constituency({
            name: req.body.name,
            region: user.region
        });
        await newConstituency.save();
        res.json(newConstituency);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Check if the Constituency is under the Region leader's region
        if (constituency.region.toString() !== user.region.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Update the Constituency
        constituency.name = req.body.name;
        await constituency.save();
        res.json(constituency);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find the Constituency by ID
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        // Check if the Constituency is under the Region leader's region
        if (constituency.region.toString() !== user.region.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Delete the Constituency
        await constituency.remove();
        res.json({ message: 'Constituency deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/invite', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Check if all required fields are present in the request body
        if (!req.body.email || !req.body.name) {
            return res.status(400).json({ message: 'Email and name are required' });
        }
        // Check if the user with the provided email already exists
        let invitedUser = await User.findOne({ email: req.body.email });
        if (invitedUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        // Create a new user with the provided email and name
        invitedUser = new User({
            email: req.body.email,
            name: req.body.name,
            role: 'constituency leader',
            region: user.region
        });
        // Save the new user
        await invitedUser.save();
        // Create a new Constituency for the user
        const newConstituency = new Constituency({
            leader: invitedUser._id,
            region: user.region
        });
        // Save the new Constituency
        await newConstituency.save();
        // Send the invitation email
        // ...
        res.json({ message: 'Invitation sent' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/cumulative-data', auth, async (req, res) => {
    try {
        // Check if the user is a Region leader
        const user = await User.findById(req.user.id);
        if (user.role !== 'region leader') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // Find all Constituencies under the Region leader
        const constituencies = await Constituency.find({ region: user.region });
        // Find the cumulative data for all Constituencies under the Region leader
        // ...
        res.json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
