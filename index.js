var serverIps = (function(ifaces) {
      var ips; 
      for (var iname in ifaces) {
        if ((ips = (ifaces[iname].filter(function (v) {
          return 'IPv4' === v.family && v.internal !== true
        }))).length) {
          break;
        };
      }
      return ips || [];
    })(require('os').networkInterfaces());

require('http').createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Server recieved a request\n');
  res.write('Client IP: ' + (req.headers['x-forwarded-for'] || req.connection.remoteAddress) + '\n');
  res.end('Server IP: ' + serverIps.map(function(v) { return v.address; }) + '\n');
}).listen(3000, '0.0.0.0', function() {
  console.log('server is up');
});
