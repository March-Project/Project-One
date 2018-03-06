  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
    authDomain: "localgoods-aa6c0.firebaseapp.com",
    databaseURL: "https://localgoods-aa6c0.firebaseio.com",
    projectId: "localgoods-aa6c0",
    storageBucket: "",
    messagingSenderId: "1095816598731"
  };
  firebase.initializeApp(config);

   var database = firebase.database();

var topics = ["Eggs", "Bread/Grains", "Milk/Cheese", "Lettuce", "Chickens", "Goats"];


$(document).ready(function(){
   $("#search-descriptor").on("click", onSearchClick);

   for(var i = 0; i < topics.length; i++) {
      addTopicButton(topics[i]);
   }

   $("#buttons").on("click", "button");


      });

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



var map = L.map('map').setView([51.505, -0.09], 13);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
      console.log(map);