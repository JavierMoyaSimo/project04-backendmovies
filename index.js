const express = require('express')
const db = require('./db/db')
const { sequelize } = require('./models/index')
const app = express()
const router = require('./router')

const PORT = 3000

//middlewares
app.use(express.json())
app.use(router)


app.listen(PORT, ()=> {
    console.log(`Servidor arrancado en el puerto ${PORT}` )

    //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas
    //con authenticate no sobreescribe y es más ligero, pero también se sincroniza
    db.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})