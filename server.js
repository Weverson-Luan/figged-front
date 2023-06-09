const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Porta que a aplicação estática será servida
app.listen(1107, () => console.log('Server Started'))