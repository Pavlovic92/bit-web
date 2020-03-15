const a = window.location.search;
let urlId = a.slice(a.length - 1);
console.log(urlId);


function infoPage() {
    const input = document.querySelector("#searchInput");
    const getInputValue = input.value;
    const urlShowSearch = "http://api.tvmaze.com/shows/" + urlId;

    const request = $.ajax({
        url: urlShowSearch,
        method: "GET"
    });

    request.done(function (data) {
        console.log(data);
        //////DIV WITH IMG///////
        let infoDiv = $(".infoMain");
        let imgDiv = $("<div>");
        let imgInfo = $("<img>");
        $(imgInfo).attr("src", data.image.original);
        $(imgDiv).append(imgInfo);
        $(infoDiv).append(imgDiv);

        ////////DIV UL SEASONS////////
        let ulDiv = $("<div>");
        let ulFirst = $("<ul>");
        let liFirst = $("<li>")

        /////////DIV CAST//////////
        let ulSecond = $("<ul>");
        let liSecond = $("<li>")

        let detailsDiv = $("<div>");
        let h3Down = $("<h3>");
        let pe = $("<p>");


    });


}
infoPage();

