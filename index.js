var firebaseConfig = {
    apiKey: "AIzaSyDHeC7hQZw6-gmeL2IOBQxJRREt9e7ztVQ",
    authDomain: "sports-site-67665.firebaseapp.com",
    projectId: "sports-site-67665",
    storageBucket: "sports-site-67665.appspot.com",
    messagingSenderId: "373421683976",
    appId: "1:373421683976:web:ef81d20caad365f11ca8bd"
};

firebase.initializeApp(firebaseConfig);

function readResults(year){
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
        var achievements = data.val();
        document.getElementById('result').innerHTML = "<br>" + achievements;
    })
}