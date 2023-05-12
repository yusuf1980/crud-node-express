const express = require("express");
const userRouter = require("./router/users");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const myLogger = function (req, res, next) {
  req.time = new Date();
  next();
};

/* connect to mongodb */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yusoft');

app.use(myLogger)

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

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

app.get("/users/create", (req, res) => res.render('pages/user/create'))

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is oke");
});
