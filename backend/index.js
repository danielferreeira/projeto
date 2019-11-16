const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = require('./src/config/secret');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('OK');
})

app.use(require('./src/routes'));

app.listen(PORT, () => {
    console.log('Server start in port 3333');
})