const express = require("express")

const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const db = require('../src/db/conn')
authRoutes = require("../src/routes/router")
const port = process.env.port || 3600
db()
dotenv.config()
const app = express()
app.use(bodyParser.json());


app.get('/test',(req, res)=>{
   console.log('working');
 
})

app.use('/api/auth', authRoutes)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})