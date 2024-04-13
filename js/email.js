let Email = document.getElementById("emailid")
let Message = document.getElementById("message")

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user)
  } else {
    
  }
});
