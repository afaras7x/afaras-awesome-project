const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Awesome this includes continuous deployment to cloud run amao great')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
