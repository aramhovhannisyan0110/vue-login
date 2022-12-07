const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const db = path.join(__dirname, 'db.json')
const router = jsonServer.router(db, { foreignKeySuffix: 'id' })
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  const user = router.db.get('users').value()
    .find(e => e.password === req.body.password && e.email === req.body.email)
  if (user) {
    res.status(200).json(user)
  } else {
    res.sendStatus(401)
  }
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
