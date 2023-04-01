//-----Requests
const express = require('express');
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


const fruits = require('./models/fruits');
//----index

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.get('/fruits/', (req, res) => {
    res.render('Index', {fruits: fruits});
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits', (req, res) => {
    res.send('hi');
});

app.listen(3000, () => {
    console.log('listening');
});

