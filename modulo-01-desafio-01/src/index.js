const express = require("express");

const server = express();
const projects = [{ id: "1", title: "Novo projeto", tasks: [] }];
var counter = 0;
function checkIdExists(req, res, next) {
  var exists = projects.find(project => project.id === req.params.id);
  return exists
    ? next()
    : res.status(400).json({ error: "This Project doesnt exists" });
}
server.use(express.json());

server.use((req, res, next) => {
  counter = counter + 1;
  console.log(`Foram feitas ${counter} requisições`);
  
  return next();
});
server.get("/projects", (req, res) => {
  return res.json(projects);
});
server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = { id, title, tasks: [] };
  projects.push(project);
  return res.status(201).json(projects);
});
server.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  const { id, title } = req.body;
  projects.forEach(project => {
    if (project.id === req.params.id) return project.tasks.push({ id, title });
    return;
  });
  return res.status(201).json(projects);
});
server.put("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.forEach(project => {
    if (project.id === id) return (project.title = title);
    return;
  });
  return res.json(projects);
});
server.delete("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;

  const toDelete = projects.findIndex(project => project.id == id);
  projects.splice(toDelete, 1);
  return res.json(projects);
});
server.listen(3000);
