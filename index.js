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

app.set('view engine', 'ejs')

app.get("/", function (req, res) {
  const kelas = {
    id: 1,
    nama: 'JavaScript',
    date: req.time.toString()
  }
  res.render('pages/index', {kelas: kelas});
});

app.get("/about", (req, res) => {
  res.render('pages/about');
});

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is oke");
});
