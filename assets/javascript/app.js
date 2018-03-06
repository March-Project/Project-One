
var apiKey = "CnHguXgYZvGys0UUBWq3MKFTXEwOI5NI";

var topics = ["Joyful", "Peaceful", "Rageful", "Friendly", "Rebellious", "Hilarious"];


$(document).ready(function(){
   $("#search-descriptor").on("click", onSearchClick);

   for(var i = 0; i < topics.length; i++) {
      addTopicButton(topics[i]);
   }

   $("#buttons").on("click", "button", displayGifs);

   clearGif(); 

    $(document).on("click", ".newImg", function(){
          var gifState = $(this).attr("data-state");
          console.log("newImg");
            
         if (gifState === "still") {
            console.log("stateanimate");
            var gifAnimate = $(this).attr("data-animate");
               $(this).attr("src", gifAnimate);
               $(this).attr("data-state", "animate");

            } else {
               console.log("statestill");
            var gifStill = $(this).attr("data-still");
            $(this).attr("src", gifStill);
            $(this).attr("data-state", "still");

      }
   })

});


// On click, giphy is displayed. 
function displayGifs(){
   var topic = $(this).attr("data-topic");
   var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
            console.log(response);
               gifVal(response);
            
            
      });

}  

//Creates the rating and state of the gif
function gifVal(response){


   var results = response.data;
          for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            }
    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);

   var newGif = $("<img>");
      newGif.attr("src", response.data[i].images.fixed_height_still.url);
      newGif.attr("data-still", response.data[i].images.fixed_height_still.url); 
        newGif.attr("data-animate", response.data[i].images.fixed_height.url); 
        newGif.attr("data-state", "still");
        newGif.addClass("newImg");
        $("#gifs").append(newGif); 
        $("#gifs").append(p);

  }
}

// grabs value from text box and adds to array 
function getSearchVal(){
   var searchBox = $("#topic-input");
   var newTopic = searchBox.val();
   topics.push(newTopic);
   searchBox.val("");

   return newTopic;
}

// creates new button with text box value and appends html.
function addTopicButton(newTopic){
   var topicButton = $("<button>");
   topicButton.text(newTopic);
   topicButton.attr("data-topic", newTopic);

   $("#buttons").append(topicButton);
}

//when Search is clicked, button with text is added to the browser.
function onSearchClick(){
   var searchVal = getSearchVal();
   addTopicButton(searchVal);
}

function clearGif(){
   $("#clear-gifs").on("click", function(){
        event.preventDefault();
        $("#gifs").empty(); 

})
}



var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
    console.log(map);