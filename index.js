const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000; //webservice

Server.use(middlewares);
Server.use(router);
Server.listen(port);

