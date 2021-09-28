var FirstName = document.getElementById("fName");
var LastName = document.getElementById("lName");
var email = document.getElementById("email");
var psw = document.getElementById("psw");
var sumbit = document.getElementById("submit");

// sumbit.addEventListener("click",function(e){
//     e.preventDefault().FirstName.classList.add("errorMess");
// })


function AddError(){

var FirstName = document.querySelector("#fName");
var LastName = document.getElementById("lName");
var email = document.getElementById("email");
var psw = document.getElementById("psw");
var sumbit = document.getElementById("submit");


   if (FirstName.value.trim()==='' ){
        FirstName.classList.add("addInputErrorIcon");
        FirstName.nextElementSibling.classList.add("display-error-text");
     }
  

     if (LastName.value.trim()==='' ){
          LastName.classList.add("addInputErrorIcon");
          LastName.nextElementSibling.classList.add("display-error-text");
       }
     if (email.value.trim()==='' ){
          email.classList.add("addInputErrorIcon");
          email.nextElementSibling.classList.add("display-error-text");
       }
    
     if (psw.value.trim()==='' ){
         psw.classList.add("addInputErrorIcon");
          psw.nextElementSibling.classList.add("display-error-text");
       }
    // remove error message and icon
    const input = document.querySelectorAll('input');

input.forEach(element => {
    element.addEventListener('input', () => {
        element.classList.remove('addInputErrorIcon');
        element.nextElementSibling.classList.remove('display-error-text');
    })

}

)}

function validEmail(email) {
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(email);
}