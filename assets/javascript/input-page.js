var config = {
 apiKey: "AIzaSyB0p6U_W374WOOQ2H-TNBzNJ1GiAZl-tHQ",
 authDomain: "project-one-march.firebaseapp.com",
 databaseURL: "https://project-one-march.firebaseio.com",
 projectId: "project-one-march",
 storageBucket: "",
 messagingSenderId: "756241675187"

};
firebase.initializeApp(config);
var database = firebase.database();

var name = "";
var destination = "";
var hours;
var goods;


$("#submit").on("click", function() {
  event.preventDefault();

  name = $("#name").val();
  destination = $("#destination").val();
  hours = $("#hours").val();
  goods = $("#goods").val();

  $("#name").val("");
  $("#destination").val("");
  $("#hours").val("");
  $("#goods").val("");

  database.ref().push({
    name: name,
    destination: destination,
    hours: hours,
    goods: goods,
    TIMESTAMP: firebase.database.ServerValue.TIMESTAMP
  });
});
database.ref().on(
  "child_added",
  function(snapshot) {
    var snap = snapshot.val();
    console.log(snap.name);
    console.log(snap.destination);
    console.log(hours);
    console.log(snap.goods);

    $("#name-display").text(snap.name);
    $("#destination-display").text(snap.destination);
    $("#hours-display").text(snap.hours);
    $("#goods-display").text(snap.goods);

    var tBody = $("#dataTable");
    var tRow = $("<tr>");
    var nameTd = $("<td>").text(snap.name);
    var destinationTd = $("<td>").text(snap.destination);
    var hoursTd = $("<td>").text(snap.hours);
    var goodsTd = $("<td>").text(snap.goods);

    // Append the newly created table data to the table row
    tRow.append(nameTd, destinationTd, hoursTd, goodsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);

var map = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([51.5, -0.09]).addTo(map)
	    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
	    .openPopup();


	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'your.mapbox.access.token'
	}).addTo(mymap);