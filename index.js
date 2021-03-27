var firebaseConfig = {
    apiKey: "AIzaSyDHeC7hQZw6-gmeL2IOBQxJRREt9e7ztVQ",
    authDomain: "sports-site-67665.firebaseapp.com",
    databaseURL: "https://sports-site-67665-default-rtdb.firebaseio.com",
    projectId: "sports-site-67665",
    storageBucket: "sports-site-67665.appspot.com",
    messagingSenderId: "373421683976",
    appId: "1:373421683976:web:ef81d20caad365f11ca8bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var userInputRef = firebase.database().ref('userInput');


function readResults(year){
    
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     var finalranks=ranks.toString().split(',');
     document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[1];    
})
}


function saveMessages(year) {
    var newuserInputsRef = userInputRef.push();
    newuserInputsRef.set({
        year:year})
    
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    
    e.preventDefault();
    var theYear = getInputVal("year");
    
    readResults(theYear);
    
}

document.getElementById('foorm').addEventListener('submit',submitForm);
