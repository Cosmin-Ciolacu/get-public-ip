const express = require("express");

const app = express();
app.get("/", (req, res) => {
  const publicIp =
    req.connection.remoteAddress || req.headers["x-forwarded-for"];
  //if (!!publicIp) throw new NotFoundError("not public ip");

  const response = {
    publicIp: publicIp,
  };
  res.send(response);
});
app.listen(1234, console.log("serverul ruleaza pe portul 1234"));
