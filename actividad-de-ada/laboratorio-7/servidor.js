const http = require('http')
const host = 'localhost'
const puerto = 8000
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' })
  const mensaje = JSON.stringify({ nombre: 'Omar', mensaje: 'Hola desde el servidor' });
  res.end(mensaje)
})

servidor.listen(puerto, host, () => {
  console.log(`Servidor corriendo en http://${host}:${puerto}/`)
})
