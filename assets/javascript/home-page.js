
 // Initialize Firebase
 var config = {
 apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
 authDomain: "localgoods-aa6c0.firebaseapp.com",
 databaseURL: "https://localgoods-aa6c0.firebaseio.com",
 projectId: "localgoods-aa6c0",
 storageBucket: "",
 messagingSenderId: "1095816598731"
apiKey: "AIzaSyAihlbC4ivgJwyFqAz-FYNf93sy8bz636I",
authDomain: "localgoods-aa6c0.firebaseapp.com",
databaseURL: "https://localgoods-aa6c0.firebaseio.com",
projectId: "localgoods-aa6c0",
storageBucket: "localgoods-aa6c0.appspot.com",
messagingSenderId: "1095816598731"
 };

 firebase.initializeApp(config);

 var database = firebase.database();
 
var topics = ["Eggs", "Bread", "Milk", "Chickens", "Goats"];
 
 
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
    });
      
      
});


function displayProduce(produce){
  database
    .ref()
    .orderByChild("goods")
    .equalTo(produce)
    .on("child_added", displayProduceHTML);
}

function displayProduceHTML(snapshot) {
  var snap = snapshot.val();

  //build HTML here
  $("#name-display").text(snap.name);
  $("#destination-display").text(snap.destination); 
  $("#hours-display").text(snap.hours);
  $("#goods-display").text(snap.goods); 

  //append it to goods info here
  $("#goodsInfo").append(snap.goods);
  $("#goodsInfo").append(snap.destination);
  $("#goodsInfo").append(snap.hours);
  $("#goodsInfo").append(snap.goods); 
}


 
 // grabs value from text box and adds to array 
 function getSearchVal(){
  var searchBox = $("#topic-input");
   var newTopic = searchBox.val();
   topics.push(newTopic);
   searchBox.val("");

   return newTopic;
 
 function onSearchClick(){ 
   var searchVal = getSearchVal();
   addTopicButton(searchVal);

}
 
 

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
var circle = L.circle([35.779, -78.63], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500
})//.addTo(mymap);