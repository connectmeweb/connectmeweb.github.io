const back =()=>{
  window.location.assign("/pages/login.html")
}

let email = document.getElementById("email")
let Message = document.getElementById("message")

const reset = () =>{
  if(email.value === "") {
    Message.innerHTML = "Email Address is required"
    Message.style.color = "red"
    email.focus()
  }
  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
    alert("The reset link has been sent to your email address")
  })
  .catch((error) => {
    Message.innerHTML = error.message;
    Message.style.color = "red"
  });
}
