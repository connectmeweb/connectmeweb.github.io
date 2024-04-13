let Email = document.getElementById("emailid")
let Message = document.getElementById("message")

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified){
      window.location.assign("/pages/home.html");
    } else {
      Email.innerHTML = user.Email
    }
  } else {
    window.location.assign("/pages/login.html");
  }
});

const resend = ()=>{
  alert("")
}
