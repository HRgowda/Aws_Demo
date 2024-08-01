// We are using AWS EC2 server for deploying our simple applicstion on cloud which is Non-Serverless.
// Express is enough for writing backend code no requirements of HONO libraray.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
	res.send("Welcome to my first AWS program!");
});

app.listen(port, () =>{
	console.log(`Server running on http://localhost:${port}`)
});
