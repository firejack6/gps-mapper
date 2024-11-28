const express = require('express')
const app = express()
const port = 3000

const cwd = process.cwd();
app.use(express.static(cwd+'/src/public'))

app.get('/', (req, res) => {
    res.sendFile(cwd+'/src/main.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})