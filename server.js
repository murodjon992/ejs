const express = require("express");
require('dotenv').config()
const fs = require('fs').promises
const port = process.env.PORT || 3050

const server = express()

server.listen(port, () => {
    console.log(`server httpda ishladi http://localhost:${port}`);
})

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.set('view engine', 'ejs');
server.set('views', './views');


// server.use('/', (req,res) => {
//     const {name} = req.query
//   res.render('index', {
//       name
//   })
// })

server.use('/users',  async(req,res) => {
const data = await fs.readFile('./users.json', 'utf-8')
const users = JSON.parse(data)

res.render('users', {
    users
})
})