//-----Requests
const express = require('express');
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


const fruits = require('./models/fruits');
//----index


app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show');
});

app.listen(3000, () => {
    console.log('listening');
});

