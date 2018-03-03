var googleApiKey = AIzaSyA7UtFdXnUuUBmVNhrGMsr9USaWoPGwX2s;
var googleLink = "https://maps.googleapis.com/maps/api/js?key=" + googleApiKey + "&callback=initMap"
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhfzERMLfX2bApW0M_UqBiMYGCk_qqAa0",
    authDomain: "project1-65e56.firebaseapp.com",
    databaseURL: "https://project1-65e56.firebaseio.com",
    projectId: "project1-65e56",
    storageBucket: "",
    messagingSenderId: "43775923033"
  };
  firebase.initializeApp(config);
   var database = firebase.database();
var userName = "";
var location = "";
var hours;
var goods;
// var nextArrival;
// var minutesAway;
$("#submit").on("click", function(){
  event.preventDefault();
    userName = $("#userName").val().trim();
    location = $("#location").val().trim();
    hours = $("#hours").val().trim();
    goods = $("#goods").val().trim();
    // nextArrival = $("#nextArrival").val().trim();
    // minutesAway = $("#minutesAway").val().trim();
// Clears the form after pressing submit
    $("#userName").val("");
    $("#location").val("");
    $("#hours").val("");
    $("#goods").val("");
database.ref().push({
  name: userName,
  location: location,
  hours: hours,
  goods: goods,
  TIMESTAMP: firebase.database.ServerValue.TIMESTAMP
   })
}); 
database.ref().on("child_added", function(snapshot) {
  var snap = snapshot.val(); 
  console.log(snap.name);
  console.log(snap.location);
  console.log(hours);
  console.log(snap.goods);
  // console.log(nextArrival);
  // console.log(snap.minutesAway);
      $("#name-display").text(snap.name);
      $("#location-display").text(snap.location);
      $("#hours-display").text(snap.hours);
      $("#goods-display").text(snap.goods);
      
      var tBody = $("#dataTable");
        var tRow = $("<tr>");
        var nameTd = $("<td>").text(snap.name);
        var destinationTd = $("<td>").text(snap.location);
        var trainTimeTd = $("<td>").text(snap.hours);
        var frequencyTd = $("<td>").text(snap.goods);
       
        
        
        // Append the newly created table data to the table row
        tRow.append(nameTd, locationTd, hoursTd, goodsTd);
        // Append the table row to the table body
        tBody.append(tRow);
        
        }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });