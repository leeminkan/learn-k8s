const http = require("http");

const server = http.createServer((req, res) => {
  res.end(
    `Hello kube from ${process.env.NODE_ENV} \n SECRET_KEY: ${process.env.SECRET_KEY} \n`
  );
});

server.listen(3000, () => {
  console.log("Server listen on port 3000...", process.env.NODE_ENV);
});
