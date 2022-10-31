const express = require('express')
const app = express()

const route = require('./routes/route')

app.use(express.json())
app.use(route)



const port = process.env.PORT || 3000

const start= async() => {
    try {
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
