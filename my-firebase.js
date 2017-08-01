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
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

var getValues = function() {
  uEmail = $('#form-input-email').val();
  uIssue = $('#form-input-issue').val();
  uDetails = $('#form-input-description').val();
  ticketId = Math.floor(Math.random() * 999999999999999999);
  $('.ticket-id').html(ticketId);
}

function writeUserData(uEmail, uIssue, uDetails, ticketId, utc) {
  firebase.database().ref('tickets/' + ticketId).set({
    email: uEmail,
    issue: uIssue,
    desc : uDetails,
    status : 'Unresolved',
    utc : utc
  });
}

$("#myForm").submit(function(e){
  e.preventDefault();
  $('.ticket-id-display').removeClass('hidden');
  getValues();
  writeUserData(uEmail, uIssue, uDetails, ticketId, utc);
});
