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
  fileType = event.target.files[0].fileType
  var uploadTask = firebase.storage().ref().child(`posts/${event.target.file[0]}`)
  
uploadTask.on('state_changed', 
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    var uploadpercentage = Math.round(progress)
    progressdiv.style.display = "block"
    progressbar.style.width = `${uploadpercentage}%`
    progressbar.innerHTML = `${uploadpercentage}%`
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      url = downloadURL;
      done.style.display="block"
      progressdiv.style.display = "none"
    });
  }
);
}
