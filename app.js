require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Peticion recibida')

    res.send('<h1>Hola Mundo!</h1>')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})