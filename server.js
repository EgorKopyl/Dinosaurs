// STATIC SERVER

const http = require('http'),
      PORT = process.env.PORT || 8080,
      fs = require('fs').promises

const server = http.createServer((req, res) => {

  if(req.method === 'GET') {

    if(req.url === '/') req.url = '/index.html'

    fs.readFile(__dirname + req.url)
    .then(content => {

      let contentType = ''

      switch(req.url.match(/\..+$/)[0]) {
        case '.js':
          contentType = 'text/javascript'
          break
        case '.css':
          contentType = 'text/css'
          break
        case '.html':
          contentType = 'text/html' 
          break
      }

      res.writeHead(200, {'Content-Type': contentType})
      res.write(content)
      res.end()
    })
    .catch(err => {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write('<meta charset="utf-8">')
      res.write('<h1><strong>404</strong> error, page not found<h1>')
      res.write(`<pre>${err}}</pre>`)
      res.end()
    })
  }
  else if(req.method === 'POST') {
    res.writeHead(405, {'Content-Type': 'text/html'})
    res.write('<meta charset="utf-8">')
    res.write('<h1><strong>405</strong> error, method not allowed<h1>')
    res.end()
  }
  
}).listen(PORT)