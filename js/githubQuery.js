var workArea = document.querySelector('.work-area');
function requestGithubData() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.github.com/users/michaelCaleyWhaley/repos', true);
    myRequest.onreadystatechange = function () {
        console.log(myRequest);
        if (myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
            var info = JSON.parse(myRequest.responseText);
            var newElement = '<div class="github-grid">';
            info.map((item, index, array) => {
                newElement += '<div class="github-item">';
                newElement += '<h4>' + item.name + '</h4>';
                newElement += '<p>' + item.description + '</p>';
                newElement += '</div>';
            });
            newElement += '</div>';
            workArea.innerHTML = newElement;
        }
    };
    myRequest.send();
}
if (workArea) {
    requestGithubData();
}
