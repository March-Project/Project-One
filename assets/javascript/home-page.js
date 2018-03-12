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

<<<<<<< HEAD
 // Initialize Firebase
 var config = {
 apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
 authDomain: "localgoods-aa6c0.firebaseapp.com",
 databaseURL: "https://localgoods-aa6c0.firebaseio.com",
 projectId: "localgoods-aa6c0",
 storageBucket: "",
 messagingSenderId: "1095816598731",
apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
authDomain: "localgoods-aa6c0.firebaseapp.com",
databaseURL: "https://localgoods-aa6c0.firebaseio.com",
projectId: "localgoods-aa6c0",
storageBucket: "localgoods-aa6c0.appspot.com",
messagingSenderId: "1095816598731"
 };

 firebase.initializeApp(config);

 var database = firebase.database();
 
var topics = ["EGGS", "BREAD", "MILK", "CHICKENS", "GOATS"];

var map, service, infoWindow;
// default map layout
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('mapId'), {
    zoom: 7,
    center: uluru
  });

// creates the pop up with data info
  infoWindow = new google.maps.InfoWindow();
// location with the lat and long
  service = new google.maps.places.PlacesService(map);
// if the browser supports geolocation (allow or block alert)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
=======
var database = firebase.database();

var topics = [
  "Eggs",
  "Bread/Grains",
  "Milk/Cheese",
  "Lettuce",
  "Chickens",
  "Goats"
];

  var audioElement = document.createElement("audio");

  audioElement.setAttribute("src", "assets/music/Stardew_Valley_OST.mp3");


  $(".theme-button").on("click", function() {
    audioElement.play();
  });

  // Pause Button
  $(".pause-button").on("click", function() {
    audioElement.pause();

  });

  // Set it's source to the location
  // of our Captain Planet theme song file.
 
  $(document).ready(function(){
   $("#search_good").on("click", onSearchClick);
 
    for(var i = 0; i < topics.length; i++) {
       addTopicButton(topics[i]);
    }
 
   $("#buttons").on("click", "button"){
      $(this).attr("data-name");
   }
   

   $("#buttons").on("click", "button", function(){
    var buttonValue = $(this).attr("data-topic");
    console.log(buttonValue);
    displayProduce(buttonValue); 
>>>>>>> master
    });
  }
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initMap);

$(document).ready(function(){
  $("#search_good").on("click", onSearchClick);
  for(var i = 0; i < topics.length; i++) {
    addTopicButton(topics[i]);
 }

$("#buttons").on("click", "button", onButtonClick);
});

//
function onButtonClick(){
  var buttonValue = $(this).attr("data-topic");
  displayProduce(buttonValue); 
 }


// searching/filtering the data from the input page
function displayProduce(produce){
  database
    .ref()
    .orderByChild("goods")
    .equalTo(produce)
    .on("child_added", function(snapshot){
      var snap = snapshot.val();
      searchLocation(snap);
    });
}

<<<<<<< HEAD
// on click, searches the location of the data linked to the button. farm = snap
function searchLocation(farm) {
  // searching for the entered location (text)
  service.textSearch({query: farm.destination}, function(results){
    // accessing the api object of location
    var location = results[0].geometry.location;
    // creates a new marker using the api object "position"
    var marker = new google.maps.Marker({
          position: {
            lat: location.lat(), 
            lng: location.lng()
          }, 
          // using the api object to access my variable "map"
          map: map
        });
// adds the retrieved data to the pop up (info)Window in text
      marker.addListener('click', function() {
        var contentString = "";
        contentString += `<div>${farm.name}</div>`;
        contentString += `<div>${farm.destination}</div>`
        contentString += `<div>Selling: ${farm.goods}</div>`
        contentString += `<div>Hours: ${farm.hours}</div>`
          infoWindow.setContent(contentString);
          infoWindow.open(map, marker);
      }); 
      console.log(results);
  });
=======
});

function displayProduceHTML(snapshot) {
  var snap = snapshot.val();
>>>>>>> master


}


function addTopicButton(newTopic){
   var topicButton = $("<button>");
   topicButton.text(newTopic);
   topicButton.attr("data-topic", newTopic);

   $("#buttons").append(topicButton);
}
 
 // grabs value from text box and adds to array 
 function getSearchVal(){
  var searchBox = $("#topic-input");
   var newTopic = searchBox.val();
   topics.push(newTopic);
   searchBox.val("");

   return newTopic;
 }

// takes the search value and passes it to the addTopicButton function
 function onSearchClick(){ 
   var searchVal = getSearchVal();
   addTopicButton(searchVal);

}
 
<<<<<<< HEAD
 
 // Presentation: 
 // Explain that users are only allowed to enter one good at a time in the input form - for now. 
 // Explain the marker click to reveal the seller's data

// Explain what works
// -Allow location permission to set the map location (farmers near me)
// Data being grabbed from firebase and referenced when button clicked (data-topic, displayProduce)
// Explain what we can finish or progress with (other ideas)


 // ToDo:
 // Auth login for firebase
 // Create drop down menu in goods input form so users are only allowed to sell one item per submit.
// (or figure way to allow multiple items to be referenced in single click) Currently, you cannot be selling Eggs and Goats, and click eggs. 
=======
 var mymap = L.map("mapid").setView([35.7796, -78.6382], 13);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
})//.addTo(mymap);

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

>>>>>>> master
