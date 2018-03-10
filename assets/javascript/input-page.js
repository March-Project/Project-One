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

   var buttonDelete = $("<button>");
    buttonDelete.attr("data-delete", snap.name);
    buttonDelete.addClass("button");
    buttonDelete.text("Delete");

    // Append the newly created table data to the table row
    tRow.append(nameTd, destinationTd, hoursTd, goodsTd, buttonDelete);
    // Append the table row to the table body
    tBody.append(tRow);


  	   
    $(".button").on("click", function(){
      $(this).closest("tr").remove();

    });


  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);


