
const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'html');

app.use("/styles", express.static(__dirname + "/styles"));
app.use("/img", express.static(__dirname + "/img"));
// app.use("/js", express.static(__dirname + "/js"));
var gitInfoRequest;
app.use((req, res, next) => {
    var makeRequest = require('./js/gitPromise.js');
    makeRequest.makeRequest().then((body) => {
        var info = JSON.parse(body);
        var newElement = '<div class="github-grid">';
        info.map((item, index, array) => {
            if (item.name !== 'content-build-tools') {
                newElement += '<div class="github-item">';
                newElement += '<h4>' + item.name + '</h4>';
                newElement += '<p>' + item.description + '</p>';
                newElement += '<a href="' + item.html_url + '" title="link to github"></a>';
                newElement += '</div>';
            }
        });
        newElement += '</div>';
        gitInfoRequest = newElement;
        next();
    }).catch((error) => {
        console.log(error);
    });
});

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
hbs.registerHelper('gitInfo', () => {
    return new hbs.SafeString(gitInfoRequest);
});

app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Homepage'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.listen(8080);