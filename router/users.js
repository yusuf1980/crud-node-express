const express = require('express');
const router = express.Router()

let users = [
    // {id: 1, name: 'Yugoh', email: 'yugoh@gmail.com'},
    // {id: 2, name: 'Doremi', email: 'doremi@gmail.com'},
]
router.route('/users')
    .get((req, res)=>{
        if(users.length) {
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }
        else {
            res.json({
                status: false,
                message: "Data users masih kosong"
            })
        }
        res.json(users)
    })
    .post((req, res)=>{
        users.push(req.body)
        // res.send(users)
        res.send({
            status: true,
            data: users,
            message: 'Data users berhasil disimpan',
            method: req.method,
            url: req.url,
        })
    })

router.put('/users/:id', (req, res)=>{
    const id = req.params.id
    users.filter((user)=>{
        if(user.id == id) {
            user.id = id
            user.name = req.body.name
            user.email = req.body.email

            return user;
        }
    })

    // res.json(users);
    res.send({
        status: true,
        data: users,
        message: 'Data users berhasil diedit',
        method: req.method,
        url: req.url,
    })
})

router.delete('/users/:id', (req, res)=>{
    let id = req.params.id
    users = users.filter(user=>user.id != id)
    res.send(users)
})

module.exports = router;