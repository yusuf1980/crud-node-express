const User = require("../models/user");

// let users = [
//     {id: 1, name: 'Yugoh', email: 'yugoh@gmail.com'},
//     {id: 2, name: 'Doremi', email: 'doremi@gmail.com'},
// ]

module.exports = {
  index: (req, res) => {
    User.find()
        .then((users) => {
            res.render("pages/user/index", { users });
        })
        .catch((error) => {
            console.log(error);
        })
  },
  store: (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then((data) => {
        // console.log(res)
        res.redirect("/users");
      })
      .catch((error) => {
        console.log(error);
      });
    // users.push(req.body)
    // res.send(users)
    // res.send({
    //     status: true,
    //     data: users,
    //     message: 'Data users berhasil disimpan',
    //     method: req.method,
    //     url: req.url,
    // })
  },
  update: (req, res) => {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.email = req.body.email;

        return user;
      }
    });

    // res.json(users);
    res.send({
      status: true,
      data: users,
      message: "Data users berhasil diedit",
      method: req.method,
      url: req.url,
    });
  },
  delete: (req, res) => {
    let id = req.params.id;
    users = users.filter((user) => user.id != id);
    res.send(users);
  },
};
