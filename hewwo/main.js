let database;
console.log("i started")
function setup() {
  var config = {
    apiKey: "AIzaSyDOExQ5xNU_hyYGZ6NrvHut5rRGFHMqx9w",
    authDomain: "test-3e95a.firebaseapp.com",
    databaseURL: "https://test-3e95a.firebaseio.com",
    projectId: "test-3e95a",
    storageBucket: "test-3e95a.appspot.com",
    messagingSenderId: "91870794114"
  };
 firebase.initializeApp(config);

 console.log(firebase);

 database = firebase.database();
 
 let ref = database.ref('score');
    
 let data = {
     name: "Ben",
     score: -1
 }    
    
 ref.push(data);
    
    
    
    //INTERFACE
    
    
}

function draw() {
    
}