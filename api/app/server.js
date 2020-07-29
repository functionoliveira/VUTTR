var app = require('express')();
var server = require('http').createServer(app);
const config = require('./config/config');

// Rotas das ferramentas
const toolsRoute = require('./routes/ToolsRoute');
app.use('/tools', toolsRoute);

// Rota para checkar se o server está de pé
app.get('/health', function(req, res) {
  res.send('Ok');
});

// Handle erros
function errorHandler(err, req, res, next) {
  console.log('error handler called');
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err.toString() });
}

// Start do servidor
server.listen(config.socket.port, () => {
  console.log('Server listening on localhost: %d', config.socket.port);
});