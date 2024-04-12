var login = ()=>{
    window.location.assign("/login.html");
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
          const userData = {
           Username: Username.value,
           Email: Email.value,
           Password: Password.value,
           ReEnterPassword: ReEnterPassword.value
         };
        Message.innerHTML = "Signed Up Successfully!";
        Message.style.color = "green";
      })
        .catch((error) => {
        Message.innerHTML = error.message;
        Message.style.color = "#ff0000";
    });
    }
  };