
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
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('mapId'), {
    zoom: 7,
    center: uluru
  });

  infoWindow = new google.maps.InfoWindow();

  service = new google.maps.places.PlacesService(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    });
  }
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initMap);





 
 
$(document).ready(function(){
  $("#search-descriptor").on("click", onSearchClick);
  for(var i = 0; i < topics.length; i++) {
    addTopicButton(topics[i]);
 }

 $("#buttons").on("click", "button", onButtonClick);
});

function onButtonClick(){
  var buttonValue = $(this).attr("data-topic");
  displayProduce(buttonValue); 
 }



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

function searchLocation(farm) {
  service.textSearch({query: farm.destination}, function(results){
    var location = results[0].geometry.location;
    var marker = new google.maps.Marker({
          position: {
            lat: location.lat(), 
            lng: location.lng()
          }, 
          map: map
        });

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

 function onSearchClick(){ 
   var searchVal = getSearchVal();
   addTopicButton(searchVal);

}
 
 