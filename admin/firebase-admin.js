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
var tickets = firebase.database().ref('tickets/');
var count = 0;

tickets.on('value', function(arg) {
	console.log(arg.ticketId);
   arg.forEach(function() {
       count++;
   });
});
