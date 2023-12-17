const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello From TechoClouds'));

app.listen(3000, () => console.log('Example app listening on port http://localhost:3000'));
