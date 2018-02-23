const request = require('request');

var makeRequest = () => {
    return new Promise((resolve, reject) => {
        request.get({
            url: "https://api.github.com/users/michaelCaleyWhaley/repos",
            Accept: 'application/vnd.github.v3+json',
            headers: {
                'User-Agent': 'michaelCaleyWhaley'
            }
        }, (error, response, body) => {
            if(!error){
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
};
module.exports = {
    makeRequest
};