var request = require('request');

var options = {
    url: 'https://api.github.com/users/michaelCaleyWhaley/repos',
    headers: {
        'User-Agent': 'michaelCaleyWhaley'
    },
    username: 'michaelCaleyWhaley',
    password: ''
};

var githubPromise = new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
        if (response.headers.status === '200 OK') {
            resolve(body);
        }
    });
});

module.exports = {
    githubPromise
};







