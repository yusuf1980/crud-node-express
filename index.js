const express = require("express");
const userRouter = require("./router/users");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const myLogger = function (req, res, next) {
  req.time = new Date();
  next();
};

app.use(myLogger)

app.get("/", function (req, res) {
  res.send(req.time.toString());
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is oke");
});
