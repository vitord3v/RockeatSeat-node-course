import http from "node:http";

const server = http.createServer((req, res) => {
  const users = [];

  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "vitor",
      email: "vitordev@gmail.com",
    });
    return res.end("Criação de usuário");
  }

  console.log(method, url);
  return res.end(method);
});

server.listen(3333);
