const express = require('express');
const router = express.Router()

const usercontroller = require('../controllers/user')

router.route('/users')
    .get(usercontroller.index)
    .post(usercontroller.store)
router.put('/users/:id', usercontroller.update)
router.delete('/users/:id', usercontroller.delete)

module.exports = router;