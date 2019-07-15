// array of topics
var topics = ["hangry", "excited", "lazy", "wild", "outraged",];

$(document).ready(function() {

    // calls the Giphy API
    function getGifs() {
        var searchName = $(this).attr(data-name);
        if (searchName === undefined) {
            searchName = searchResult;
        }
    }
})

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchName + "api_key=QN2T4jbF2af57zLbM6oEnvvLn4RmWd2J&limit=10";
console.log(searchName);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    
    // store data inresults variable and loop through
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

        $("#giphys").append(newGif);
        resultDiv.append(newGif);
        resultDiv.append(p);

        $("#giphys").prepend(resultDiv);
    }
});

$("gif").on("click", function () {
    let state = $(this).attr("date-animate");
    if (state === 'still') {
        const url = $(this).attr("date-animate");
        $(this).attr("src", url);
        $(this).attr("date-state", 'animate');
        console.log(state);
    }
    else if (state === 'animate') {
        const url = $(this).attr("date-still");
        $(this).attr("src", url);
        $(this).attr("date-state", 'still');
        console.log(state); 
    }
});

//shows gif data
function displayButtons() {

    $("#addTopics").empty();
for (var i = 0; i < topics.length; i++) {
   
    //generates buttons for each topic in the array
    var b = $("<buttons>");
   // adds class of mood
    b.addClass("mood btn btn-outline-primary")
    // added a data attribute
    b.attr("data-name", topics[i]);
    // initial button text
    b.text(topics[i]) ;
    // added the button to the addTopics div
    $("#addTopics").append(b);
}
}

$("#searchButton").on("click", function (event) {
    event.preventDefault();

    searchResult = $("#searchInput").val().trim();
    console.log("input: " + searchResult);

    topics.push(searchResult);
    console.log(topics);

    getGifs(searchResult);
    displayButtons();
});

$(document).on("click: ", "mood", getGifs);

displayButtons();
