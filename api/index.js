const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res)=>{
    res.status(200).json('Yo its the root route')
})

app.listen(port, () => {console.log(`listening on port ${port}`)})