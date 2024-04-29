
function correctPW() {
  
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
let password1 = document.getElementById('newPW');
let password2 = document.getElementById('newPW2');
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

    password1.onkeyup = function() {
        // Validate lowercase letters
        
        if(password1.value.match(lowerCaseLetters)) {
          letter.classList.remove("invalid");
          letter.classList.add("valid");
        } else {
          letter.classList.remove("valid");
          letter.classList.add("invalid");
      }
      
        // Validate capital letters
        
        if(password1.value.match(upperCaseLetters)) {
          capital.classList.remove("invalid");
          capital.classList.add("valid");
        } else {
          capital.classList.remove("valid");
          capital.classList.add("invalid");
        }
      
        // Validate numbers
        
        if(password1.value.match(numbers)) {
          number.classList.remove("invalid");
          number.classList.add("valid");
        } else {
          number.classList.remove("valid");
          number.classList.add("invalid");
        }
      
        // Validate length
        if(password1.value.length >= 8) {
          length.classList.remove("invalid");
          length.classList.add("valid");
        } else {
          length.classList.remove("valid");
          length.classList.add("invalid");
        }
      }
     
      if(password1.value.match(lowerCaseLetters) === false) {
        alert(" at least 1 lowercase letter required ")
      } else if(password1.value.match(upperCaseLetters) === false) {
        alert("at least 1 uppercase letter required ")
      } else if(password1.value.match(numbers) === false) {
        alert("at least 1 number required ") 
      }  else if (password1.value === "") {
        alert("password field is empty") 
       } else if(password1.value.length < 8) {
        alert("password must have 8 characters")
      } else if (password2.value === "") {
        alert("please re-enter password") 
      } else if (password1.value === password2.value) {
        alert("Passwords match");
        window.location.href='/Users/corcoding/digitalcrafts/projectTwo/frontend/html/login.html'
     } else if( password1 != password2.value) {
        alert("Passwords do not match")
     }
}
