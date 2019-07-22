const express = require('express');
const ss = express.Router();
const screenshot = require('screenshot-desktop')
const fs = require('fs');

ss.get("/take", (req, res) => {
    screenshot({ filename: `${new Date().valueOf()}.jpg` })
    .then(async image => {
        try {
            const picture = await fs.readFileSync(image, { encoding: 'base64' });
            res.send(picture);
        } catch (error) {
            res.status(500).send(error);            
        }
    })
    .catch(error => res.status(500).send(error));
})

module.exports = ss;