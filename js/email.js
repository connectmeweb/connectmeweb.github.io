let Email = document.getElementById("emailid")
let Message = document.getElementById("message")

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified){
      window.location.assign("Login.html");
    }
  } else {
    
  }
});
