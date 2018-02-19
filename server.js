const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'html');

app.use("/styles",express.static(__dirname + "/styles"));
app.use("/img",express.static(__dirname + "/img"));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Homepage',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.listen(3000);