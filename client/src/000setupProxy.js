const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/api/search', { target: 'http://localhost:3001/' }))
    app.use(proxy('/api/addNew', { target: 'http://localhost:3001/' }))
}