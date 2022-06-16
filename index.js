const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const msg = 'Node app Running AWS ECS Fargate'
    
    res.end(JSON.stringify({ message: msg }))
})

app.listen(3000, () => {
    console.log(`server connected`)
})
