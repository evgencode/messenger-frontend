const Static = require('node-static')
const http = require('http')
const path = require('path')
const fs = require('fs')

const config = require('./config')

const staticFolder = '/static'
const publicDir = path.resolve(__dirname, '../public')
const fileServer = new Static.Server(publicDir, { cache: config.cache })

const server = http
  .createServer(function(request, response) {
    request
      .addListener('end', function() {
        fileServer.serve(request, response, function(err, res) {
          if (err && err.status === 404) {
            let _req = path.parse(request.url)
            let file = path.resolve(__dirname, '..' + request.url)

            if (_req.dir === staticFolder && fs.existsSync(file)) {
              fileServer.serveFile('../' + request.url, 200, {}, request, response)
            } else {
              fileServer.serveFile('/index.html', 404, {}, request, response)
            }
          }
        })
      })
      .resume()
  })
  .listen(config.port, null)

server.on('listening', () => {
  console.log(`listening on http://localhost:${config.port}`)
})
