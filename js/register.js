var login = ()=>{
    window.location.assign("/pages/login.html");
  };
  
  const Username= document.getElementById("username");
  const Email= document.getElementById("emailaddress");
  const Password= document.getElementById("password");
  const ReEnterPassword= document.getElementById("repass");
  const Message= document.getElementById("message");
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  const signup = () =>{
    if(Username.value === "") {
      Message.innerHTML = "Username is required";
      Message.style.color = "#ff0000";
    } else if(Email.value === "") {
      Message.innerHTML = "Email Address is required";
      Message.style.color = "#ff0000";
    } else if(Password.value === "") {
      Message.innerHTML = "Password is required";
      Message.style.color = "#ff0000";
    } else if(ReEnterPassword.value === "") {
      Message.innerHTML = "Please re-enter your password";
      Message.style.color = "#ff0000";
    } else if(Username.value.length > 30) {
      Message.innerHTML = "Username can have no more than 30 characters";
      Message.style.color = "#ff0000";
    } else if(!Email.value.match(regex)) {
      Message.innerHTML = "Vaild Email Address is required";
      Message.style.color = "#ff0000";
    } else if(Password.value !== ReEnterPassword.value) {
      Message.innerHTML = "Vaild Password is required";
      Message.style.color = "#ff0000";
    } else {
      firebase.auth().createUserWithEmailAndPassword(Email.value, Password.value)
      .then((userCredential) => {
          var d = new Date().toLocaleDateString();
          
          const userData = {
           Username: Username.value,
           Email: Email.value,
           Password: Password.value,
           ReEnterPassword: ReEnterPassword.value,
           uid: userCredential.user.uid,
           ProfilePicture: "",
           CoverPicture: "",
           Description: "",
           Signupdate: `${d}`
         };
         firebase.firestore().collection("users").doc(userCredential.user.uid).set(userData).then((res)=>{
           Message.innerHTML = "Account was Successfully created!"
           Message.style.color = "green"

           const user = firebase.auth().currentUser;
           user.sendEmailVerification().then((res)=>{
             setTimeout(()=>{
               window.location.assign("/pages/emailVerification.html")
             },2000)
           })
         })
      })
        .catch((error) => {
        Message.innerHTML = error.message;
        Message.style.color = "#ff0000";
    });
    }
  };
