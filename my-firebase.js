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

// Get a reference to the database service
var database = firebase.database();
var uEmail = null;
var uIssue = null;
var uDetails = null;
var ticketId = null;

var getValues = function() {
  uEmail = $('#form-input-email').val();
  uIssue = $('#form-input-issue').val();
  uDetails = $('#form-input-description').val();
  ticketId = Math.floor(Math.random() * 999999999999999999);
  $('.ticket-id').html(ticketId);
  writeUserData(uEmail, uIssue, uDetails, ticketId);
}

function writeUserData(uEmail, uIssue, uDetails, ticketId) {
  firebase.database().ref('tickets/' + ticketId).set({
    email: uEmail,
    issue: uIssue,
    desc : uDetails,
    status : 'Unresolved'
  });
}

$("#myForm").submit(function(e){
  e.preventDefault();
  $('.ticket-id-display').removeClass('hidden');
  getValues();
});

// $('#myForm').submit(function() {
//     // get all the inputs into an array.
//     var $inputs = $('#myForm :input');
//     console.log($inputs);
//     // not sure if you wanted this, but I thought I'd add it.
//     // get an associative array of just the values.
//     var values = {};
//     $inputs.each(function() {
//         values[this.name] = $(this).val();
//     });

// });



