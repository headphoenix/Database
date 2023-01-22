const express = require('express');
const router = express.Router();
const Bacenta = require('../models/bacenta');
const Constituency = require('../model/constituency');
const Region = require('../model/region');
const auth = require('../middleware/auth');

router.post('/bacenta', auth, async (req, res) => {
    try {
        const bacenta = new Bacenta(req.body);
        await bacenta.save();
        res.status(201).json({ bacenta });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/bacenta/:id', auth, async (req, res) => {
    try {
        const bacenta = await Bacenta.findById(req.params.id);
        if (!bacenta) {
            return res.status(404).json({ message: 'Bacenta not found' });
        }
        res.json({ bacenta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/bacenta/:id', auth, async (req, res) => {
    try {
        const bacenta = await Bacenta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bacenta) {
            return res.status(404).json({ message: 'Bacenta not found' });
        }
        res.json({ bacenta });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/constituency', auth, async (req, res) => {
    try {
        const constituency = new Constituency(req.body);
        await constituency.save();
        res.status(201).json({ constituency });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/constituency/:id', auth, async (req, res) => {
    try {
        const constituency = await Constituency.findById(req.params.id);
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        res.json({ constituency });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/constituency/:id', auth, async (req, res) => {
    try {
        const constituency = await Constituency.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!constituency) {
            return res.status(404).json({ message: 'Constituency not found' });
        }
        res.json({ constituency });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/region', auth, async (req, res) => {
    try {
        const region = new Region(req.body);
        await region.save();
        res.status(201).json({ region });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/region/:id', auth, async (req, res) => {
    try {
        const region = await Region.findById(req.params.id);
        if (!region) {
            return res.status(404).json({ message: 'Region not found' });
        }
            res.json({ region });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    router.patch('/region/:id', auth, async (req, res) => {
        try {
            const region = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!region) {
                return res.status(404).json({ message: 'Region not found' });
            }
            res.json({ region });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    
    module.exports = router;
    

