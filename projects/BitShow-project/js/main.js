////////////HOME PAGE///////

function searchShows() {
    const input = document.querySelector("#searchInput");
    const getInputValue = input.value;
    const urlShowSearch = "http://api.tvmaze.com/shows";

    const request = $.ajax({
        url: urlShowSearch,
        method: "GET"

    });
    request.done(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let mainDiv = $('.main');
            let wrapperDiv = $('<div>');
            $(wrapperDiv).addClass('wrapper-div');

            let showImage = $('<img>');
            showImage.attr('src', data[i].show.image.original);

            let showTitle = $('<a>');
            showTitle.text(data[i].show.name);
            $(showTitle).attr('href', 'info.html?id=' + data[i].show.id);
            $(showTitle).attr('target', '_blank');

            $(wrapperDiv).append(showImage);
            $(wrapperDiv).append(showTitle);

            $(mainDiv).append(wrapperDiv);

        }

    })
}



const btn = document.querySelector("#search-btn");
btn.addEventListener("click", searchShows);



















// const pressKey = function (event) {
//     if (event.keyCode === 13) {
//         input.textContent += ` ${event.code}`;
//     }
// }
