
// const Octokit = require('octokit');
// const gh = Octokit.new({
//     username: "michaelCaleyWhaley",
//     password: "gitB1988",
//     // client_id: '8ee1692cf3d940274083',
//     // client_secret: '6d923e3aa5f62774a2dd758dc542d0acbcbdbaa4'
// });


// const user = gh.getUser('michaelCaleyWhaley');
// // console.log(user);

// user.getInfo().then(function (user) {
//     console.log(user);
// }).catch(function (error) {
//     console.log('error: ' + error);
// });


// const request = require('request');

// request.get('https://api.github.com/users/michaelCaleyWhaley/repos', (error, response) => {
//     console.log(response);
// });


var request = require('request');

var options = {
    url: 'https://api.github.com/users/michaelCaleyWhaley/repos',
    headers: {
        'User-Agent': 'michaelCaleyWhaley'
    },
    username: 'michaelCaleyWhaley',
    password: 'gitB1988'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        
        info.map((item, index, array) => {
            console.log(item.name);
        });

    }
}

request(options, callback);