const express = require('express')
const cors = require('cors')

const app = express()

const posts = [
	{
		body: 'Hello world',
		date: '2/17/19'
	},
	{
		body: 'Brutal and Extended Cold Blast could shatter ALL RECORDS - Whatever happened to Global Warming?',
		date: '2/16/19'
	},
	{
		body: 'nice',
		date: 'nice'
	}
]

app.use(cors())

app.get('/posts', (request, response) => {
	response.json(posts)
})

app.get('/add-post', (request, response) => {
	posts.push({
		body: '' + Math.random(),
		date: 'just now'
	})

	response.sendStatus(200)
})

app.listen(7777, () => {
	console.log('Server listening at http://0.0.0.0:7777')
})
