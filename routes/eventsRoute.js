const express = require('express');
const router = express.Router();


const Event = require('../models/event')

router.get("/getallevents", async (req, res) => {
    try {
        const events = await Event.find({})
        res.send(events)
    } catch (error) {
        return res.status(400).json({message: error})
    }
})

module.exports = router;