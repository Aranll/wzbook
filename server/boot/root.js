'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  
  var windowsPathReg = new RegExp('[A-Za-z][:]', 'igm');
  console.log(__dirname);
  if(windowsPathReg.test(__dirname)){
    router.use(server.loopback.static(__dirname.replace('\\server\\boot', '') + '\\client'))
  }else{
    router.use(server.loopback.static(__dirname.replace('/server/boot', '') + '/client'))
  }

  server.use(router);
};
