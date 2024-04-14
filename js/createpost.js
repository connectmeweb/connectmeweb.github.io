let postValue = document.getElementById("textarea")
let progressdiv = document.getElementById("progressdiv")
let progressbar = document.getElementById("progressbar")
let currentUser=""
let url = ""
let fileType = ""
let done = document.getElementById("done")
let uid

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified) {
        // home
        setTimeout(() => {
          uid = user.uid
        }, 1000);
      } else {
        // email verification
        setTimeout(() => {
          window.location.assign("./pages/email.html");
        }, 1000);
      }
    } else {
      // login
      setTimeout(() => {
        window.location.assign("./pages/login.html");
      }, 1000);
    }
  });

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user
})

let uploading = (event) =>{
  
}
