const express = require('express');
const app = express();
const cors = require('cors');
const { thingQuotes } = require('./data.js');

app.use(cors());

app.get('/thing-quotes', (req, res) => {
    res.json(thingQuotes);
})

app.get('/thing-quotes/:id', (req, res) => {
    const match = thingQuotes.find(quote => quote.id === Number(req.params.id));

    res.json(match)
})

module.exports = {
    app
}

//git push heroku dev:main