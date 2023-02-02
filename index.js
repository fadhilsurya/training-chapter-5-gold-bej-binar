const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const userRoute = require('./route/toyota.route')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/user', userRoute)

// testing connection and connect for sequelize here

app.listen(port, () => {
    if (process.env.ENV == 'DEV') {
        console.log(`halo ini ada di bagian untuk DEV`)
    } else if (process.env.ENV == 'PROD') {
        console.log(`halo ini ada di bagian untuk PROD`)
    } else {
        console.log(`ENV tidak terbaca`)
    }
    console.log(`Example app listening on port ${port}`)
})