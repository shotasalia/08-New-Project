const bcrypt = require('bcrypt')

const x = 'shota'

const y = bcrypt.hash(x, 10).then((result)=>{
    return this.result
}).catch((err)=>{
    return err
})

console.log(bind(y))

const result = module.y
const realresult = result.bind(module)
console.log(realresult)
