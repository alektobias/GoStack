const { Router } = require("express");

const routes = new Router();
routes.get('/', (req, res) => {
  return res.json({hello: 'world!'})
})
module.exports = routes;
