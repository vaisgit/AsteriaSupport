// Initialize Firebase
var config = {
    apiKey: "AIzaSyDIrNm_jIzyND3dfKbOAbu5VgryxOXPwGk",
    authDomain: "asteria-support.firebaseapp.com",
    databaseURL: "https://asteria-support.firebaseio.com",
    projectId: "asteria-support",
    storageBucket: "",
    messagingSenderId: "787825209505"
};
firebase.initializeApp(config);

var database = firebase.database();
var uEmail = null;
var ticketID = null;

$("#myForm2").submit(function(e){
  e.preventDefault();
  getInputs();
  checkStatus();
});

var getInputs = function() {
	uEmail = $('#input-details-email').val();
	ticketID = $('#input-details-ticket').val();
}

var checkStatus = function() {
	return firebase.database().ref('/tickets/' + ticketID).once('value').then(function(arg) {
	var fetchedData = arg.val();
	if(fetchedData == null){
		display('Invalid Input!');
	}
  	var fetchedEmail = fetchedData.email;
  	if(fetchedEmail === uEmail){
  		display('Status : ' + arg.val().status);
  	} else {
  		display('Invalid Input!');

  	}
	});
}

var display = function(arg) {
	$('.status').html(arg);
  	$('.ticket-status').removeClass('hidden');
}