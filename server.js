
const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'html');

// github api call
const githubGrid = require('./js/githubQuery.js');

app.use("/styles", express.static(__dirname + "/styles"));
app.use("/img", express.static(__dirname + "/img"));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
hbs.registerHelper('githubProfile', () => {
    var newElement = '<div class="github-grid">';
    githubGrid.githubPromise.then((body) => {
        var info = JSON.parse(body);
        info.map((item, index, array) => {
            newElement += '<div class="github-item">';
            newElement += '<h4>' + item.name + '</h4>';
            newElement += '<p>' + item.description + '</p>';
            newElement += '</div>';
        });
        newElement += '</div>';
    });
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