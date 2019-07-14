// array of topics
var topics = ["hangry", "excited", "lazy", "wild", "outraged",];

$(document).ready(function() {

    // calls the Gphy API
    function gifGifs() {
        var searchName = $(this).attr(data-name);
        if (searchName === undefined) {
            searchName = searchResults;
        }
    }
})

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchName + "api_key=QN2T4jbF2af57zLbM6oEnvvLn4RmWd2J&limit=10";
console.log(searchName);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    
    var results = response.data;
    for (var i = 0; i < results.length; i++) {

        var resultDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var newGif = $("<img>").attr('data-state', 'animate');

        let gifUrl = results[i].images.original.url;
        newGif.attr("src", gifUrl);
        newGif.addClass("gif");

        let stillURL = results[i].images.fixed_width_still.url;
        newGif.attr("data-animate", gifUrl);
        newGif.addClass("gif");
    }
});