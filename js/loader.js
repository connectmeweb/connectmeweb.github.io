firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    if(user.emailVerified) {
      setTimeout(()=>{
        window.location.assign("/pages/home.html")
      },1000)
    } else {
      setTimeout(()=>{
        window.location.assign("/pages/emailVerifiation.html")
      },1000)
    } else {
      setTimeout(()=>{
        window.location.assign("/pages/emailVerifiation")
      },1000)
    }
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
