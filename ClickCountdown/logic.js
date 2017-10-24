  var config = {
    apiKey: "AIzaSyAVfaEFazYu82_AlTihPYXH1G2kSS3bn-E",
    authDomain: "click-countdown-a758d.firebaseapp.com",
    databaseURL: "https://click-countdown-a758d.firebaseio.com",
    projectId: "click-countdown-a758d",
    storageBucket: "click-countdown-a758d.appspot.com",
    messagingSenderId: "974481113677"
  };

  firebase.initializeApp(config);

  var count =

  firebase.database().ref().on("value",function(snapshot){
  	count = snapshot.val().clicks;
  	$('#clicksValue').html(count);
  })

  $('#clickButton').on("click",function(){
  	click--;
  	firebase.database().ref().set({
  		clicks:count
  	})
  })