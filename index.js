const express = require('express')
const app = express()

const PORT = 8000

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        status: "okk",
        message:"app is running"
    })
})

app.get('/home', (req,res)=>{
    res.status(200).json({
        status: "okk",
        message:"homeee"
    })
})


app.listen(PORT,()=>{
    console.log(`App is up and running on port ${PORT}`)
})