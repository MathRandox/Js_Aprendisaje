const express = require('express')
require('dotenv').config()
const {dbConection} = require('./config/database')
const cors = require('cors')

const app=express()
app.use(cors())
dbConection()
console.log(process.env)
app.get('/api/usuarios', (req, res) => {
    res.json({
        ok:true,
        usuarios:[{
            id:123,
            nombre: 'Adrian Smith'
        },
        {
            id:456,
            nombre: 'Dave Muray'
        }]
    })
})
app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando desde el puerto 8888')
})
