console.log(window);

const showId = window.location.search.split('=')[1];

const newXHR = new XMLHttpRequest();
newXHR.open('GET', 'http://api.tvmaze.com/shows/' + showId);

newXHR.onload = function () { //.onload gets called when the data is back and successful
    console.log(JSON.parse(newXHR.responseText));

}
newXHR.send();

