var firebase = require("firebase");
var triggerPN = require("triggerPushNotifications");


var databaseURL = "https://testproject-5ad74.firebaseio.com";
var serverKey = "key=AIzaSyCsfry5WX90KdMbacFzd6s5ehb1Pl40Klg";
var contentType = "application/json";
var pushNotEndpoint = "/fcm/send";
var pushNotHostName = "fcm.googleapis.com";

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  databaseURL: databaseURL,
  serviceAccount: "testProject-a9afb4654157.json"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
var ref = db.ref("/");
// ref.on("child_added", function(snapshot) {
//   console.log(snapshot.val());
// });

triggerPN.setHost(pushNotHostName);
triggerPN.setServerAuthKey(serverKey);
triggerPN.setContentType(contentType);

var sampleData = { "data": {
    "score": "5x1",
    "time": "15:10"
  },
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
};

function successCallback(data){
	console.log("Data: " + JSON.stringify(data));
}

triggerPN.performRequest(pushNotEndpoint, "POST", sampleData, successCallback);
