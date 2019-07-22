const NodeWebcam = require( "node-webcam" );

//Default options
const opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
     output: "jpeg", 
    callbackReturn: "location", 
    verbose: false
};

const Webcam = NodeWebcam.create( {...opts, device : false} );

module.exports = Webcam;

// Webcam.list( function( list ) {
//     //Use another device
//     const anotherCam = NodeWebcam.create( {...opts, device : list[0]});
//     anotherCam.capture( "test_picturess", function( err, data ) {} );
// });

