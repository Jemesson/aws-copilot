const express = require('express')
const app = express()

app.get('/', (_req, res) => {
    const msg = 'Node app is Running on AWS'
    
    res.end(JSON.stringify({ message: msg }))
})

app.listen(3000, () => {
    console.log(`server connected!`)
})
