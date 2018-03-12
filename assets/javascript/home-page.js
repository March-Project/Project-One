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

//Creates the audio element
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
  // of our theme song file.
 
  $(document).ready(function(){
   $("#search_good").on("click", onSearchClick);
 
    for(var i = 0; i < topics.length; i++) {
       addTopicButton(topics[i]);
    }
    
   $("#buttons").on("click", "button", function(){
    var buttonValue = $(this).attr("data-topic");
    displayProduce(buttonValue); 
    
   });
  }
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initMap);


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
});
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

