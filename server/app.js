require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3500

app.use('/api/v1', require('./routes/manufacturing'))


app.listen(PORT, ()=>{
    console.log(`Server listens at port ${PORT}`)
})