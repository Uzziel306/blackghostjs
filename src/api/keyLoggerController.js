const express = require('express');
const kl = express.Router();
const fs = require('fs');

kl.get("/", async (req, res) => {
    try {
        const log = await fs.readFileSync(`log.txt`);
        res.send(log.toString());
    } catch (error) {
        res.status(500).send(error);            
    }
})

module.exports = kl;