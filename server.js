const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Server working');
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
});