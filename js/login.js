var signup = ()=>{
    window.location.assign("/pages/register.html");
  };
  
  const Email= document.getElementById("email");
  const Password= document.getElementById("password");
  const Message= document.getElementById("message");
  
  const login =()=>{
    if(Email.value === "") {
      Message.innerHTML = "Email Address is required";
      Message.style.color = "#ff0000";
    } else if(Password.Value === "") {
      Message.innerHTML = "Password is required";
      Message.style.color = "#ff0000";
    } else {
      const userData = {
        Email: Email.value,
        Password: Password.value
      };
      firebase.auth().signInWithEmailAndPassword(userData.Email, userData.Password)
  .then((userCredential) => {
    Message.innerHTML = "Sign In Successfully"
    Message.style.color = "green"
    if (userCredential.user.emailVerified) {
        window.location.assign("/pages/home.html")
    } else {
        window.location.assign("/pages/emailVerification.html")
    }
  })
  .catch((error) => {
    Message.innerHTML = error.message
  });
    }
  }
