const express = require('express')
const app = express()
const db = require('./db/db')
const router = require('./router')
// require('./models/index')
// const models1 = require('./views/moviesRoutes')
// const models2 = require('./views/seriesRoutes')


const PORT = 3000

//middleware
app.use(express.json())
// app.use(returnHi)
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