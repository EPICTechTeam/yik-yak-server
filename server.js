const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (request, response) => {
	response.send('' + Math.random())
})

app.listen(7777, () => {
	console.log('Server listening at http://0.0.0.0:7777')
})
