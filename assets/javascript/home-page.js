// Initialize Firebase
var config = {
  apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
  authDomain: "localgoods-aa6c0.firebaseapp.com",
  databaseURL: "https://localgoods-aa6c0.firebaseio.com",
  projectId: "localgoods-aa6c0",
  storageBucket: "localgoods-aa6c0.appspot.com",
  messagingSenderId: "1095816598731"
};
firebase.initializeApp(config);

var database = firebase.database();

var topics = [
  "Eggs",
  "Bread/Grains",
  "Milk/Cheese",
  "Lettuce",
  "Chickens",
  "Goats"
];

$(document).ready(function() {
  $("#search_good").on("click", onSearchClick);

  for (var i = 0; i < topics.length; i++) {
    addTopicButton(topics[i]);
  }

  $(".topic").on("click", handleButtonClick);
  $(this).attr("data-name");

  var audioElement = document.createElement("audio");

  // Set it's source to the location
  // of our Captain Planet theme song file.
  audioElement.setAttribute("src", "assets/music/Stardew_Valley_OST.mp3");

  // Theme Button


  $(".theme-button").on("click", function() {
    audioElement.play();
  });

  // Pause Button
  $(".pause-button").on("click", function() {
    audioElement.pause();

  });
});

function handleButtonClick(){

  console.log($(this).attr("data-topic"));

};

// grabs value from text box and adds to array
function getSearchVal() {
  var searchBox = $("#topic-input");
  var newTopic = searchBox.val();
  topics.push(newTopic);
  searchBox.val("");

  return newTopic;
}

// creates new button with text box value and appends html.
function addTopicButton(newTopic) {
  var topicButton = $("<button class='topic'>");
  topicButton.text(newTopic);
  topicButton.attr("data-topic", newTopic);

  $("#buttons").append(topicButton);
}




//when Search is clicked, button with text is added to the browser.
function onSearchClick() {
  var searchVal = getSearchVal();
  addTopicButton(searchVal);
}

//var map = L.map("mapid").setView([35.7796, -78.6382], 13);
var mymap = L.map("mapid").setView([35.7796, -78.6382], 13);


L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([35.7796, -78.6382])
  .addTo(mymap)
  .bindPopup("Where am I?")
  .openPopup();

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoibHN3ZWhiaWUiLCJhIjoiY2plaHIzMHU0MmJ5NzJ4bWs5YnJkMWp2OSJ9.Y-2AEgRxi3Iiq8j7TcSlcQ}",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken:
      "pk.eyJ1IjoibHN3ZWhiaWUiLCJhIjoiY2plaHIzMHU0MmJ5NzJ4bWs5YnJkMWp2OSJ9.Y-2AEgRxi3Iiq8j7TcSlcQs"
  }
)//.addTo(mymap);


var circle = L.circle([35.779, -78.63], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
