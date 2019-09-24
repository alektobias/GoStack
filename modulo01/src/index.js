const express = require("express");

const server = express();

const users = ["joao", "maria", "chico"];

server.use(express.json());

server.use((req, res, next) => {
  console.log("Método: ", req.method, "\nURL: ", req.url);
  return next();
});

function checkUserExist(req, res, next) {
  if (!req.body.name)
    return res.status(400).json({ error: "User name is required!" });

  return next();
}
function checkUserIndexInArray(req, res, next) {
  if(!users[req.params.index]) return res.status(400).json({error: "User not exists!"});
  
  return next();
}
server.get("/users", (req, res) => {
  return res.json(users);
});
server.get("/users/:index", checkUserIndexInArray, (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});
server.post("/users", checkUserExist, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});
server.put("/users/:index", checkUserIndexInArray, checkUserExist, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});
server.delete("/users/:index", checkUserIndexInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen(3000);
