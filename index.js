const express = require('express')
const userRouter = require('./router/users')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
    res.send('Home');
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.use(userRouter)

app.listen(3000, () => {
    console.log('Server is oke')
})