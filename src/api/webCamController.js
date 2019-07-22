const express = require('express');
const webcam = express.Router();
const Webcam = require('../tools/webcam');
const fs = require('fs');

webcam.get("/list", (req, res) => {
    Webcam.list( function( list ) {
        res.send(list);
    });
})

webcam.get("/take", (req, res) => {
    Webcam.capture(`${new Date().valueOf()}`, async  function( err, data ) {
        try {
            const picture = await fs.readFileSync(data, { encoding: 'base64' });
            res.send(picture);
        } catch (error) {
            res.status(500).send(error);            
        }
    } );
})

module.exports = webcam;