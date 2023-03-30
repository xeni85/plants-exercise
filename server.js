//-----Requests

const express = require('express');
const app = express();

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];


//----index
app.get('/', (req, res) => {
    res.send(<h1>Root/ Index Page</h1>);
});


app.get(':indexOfPlantsArray', (req, res) => {
    res.send(fruits[req.params.indexOfPlantsArray]);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
    console.log('listening');
});