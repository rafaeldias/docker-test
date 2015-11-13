require('http').createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server recieved a request');
}).listen(3000, '0.0.0.0', function() {
  console.log('server is up');
});
