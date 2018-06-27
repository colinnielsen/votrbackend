const app = require('./app')
var port = process.env.PORT || 3000

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, "listening on "+ port))
