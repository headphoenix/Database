// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const User = require('../model/user');
// const Constituency = require('../model/constituency');

// router.get('/', auth, async (req, res) => {
//     try {
//         // Check if the user is a Region leader
//         const user = await User.findById(req.user.id);
//         if (user.role !== 'region leader') {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }
//         // Find all Constituencies under the Region leader
//         const constituencies = await Constituency.find({ region: user.region });
//         res.json(constituencies);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// router.get('/:id', auth, async (req, res) => {
//     try {
//         // Check if the user is a Region leader
//         const user = await User.findById(req.user.id);
//         if (user.role !== 'region leader') {
//             return res.status(401).json({ message: 'Unauthorized' });
//         }
//         // Find the Constituency by ID
//         const constituency = await Constituency.findById(req.params.id);
//         if (!constituency) {
//             return res.status(404).json({ message: 'Constituency not found' });
//         }
//         // Check if the Constituency is under the Region leader's region
//         if (constituency.region.toString() !== user.region.toString()) {
//             return res.
