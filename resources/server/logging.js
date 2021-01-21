var morgan = require("morgan");

// Logging configuration
app.use(morgan(function (tokens, req, res) {
    return [
      name, ' -> ', tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens['response-time'](req, res), 'ms -',
      tokens.res(req, res, 'content-length'),
    ].join(' ');
  }));
  