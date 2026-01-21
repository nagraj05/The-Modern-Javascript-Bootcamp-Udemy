import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req.rawHeaders);
  res.send("<h1>Hello</h1>");
});

app.get("/login", (req, res) => {
  res.send("Login Pagettt");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
