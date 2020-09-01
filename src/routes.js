const { Router } = require('express')
const routes = Router()

routes.get('/isAlive', (req, res) => {
    res.send("no")
})

module.exports = routes