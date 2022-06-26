const express = require("express");
const app = express();

app.get("/", (Request, Response) => {
  Response.send("Home Page");
});

app.get("/about", (Request, Response) => {
  Response.send("About Page");
});

app.listen(3001);

module.exports = app;
