const bcrypt = require('bcryptjs')


const password = 'shota'

let x = 'gio'
const promise = bcrypt.hash(password, 10)
.then((result)=>{

})
.catch((err)=>{console.log(err)})


console.log(x)