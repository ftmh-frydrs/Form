let $ = document;

const nameInput = $.getElementById("name");
const emailInput = $.getElementById("email");
const passwordInput = $.getElementById("password");
const inputBtn = $.getElementById("input-btn");
const textarea = $.getElementById("textarea");
const emailMessage = $.querySelector(".email-validation");
const nameMessage = $.querySelector(".name-validation");
const passwordMessage = $.querySelector(".password-validation");

inputBtn.addEventListener("click", function (e) {
  if (
     nameInput.value == "" ||
     emailInput.value == "" ||
     passwordInput.value == "" ||
     nameValidation()=== false||
     passwordValidation()===false ||
     emailValidation()===false
  ) {
       alert("please compleate forme");
         e.preventDefault(); 
           return false;
  } else {
         alert("Thank You");
           return true;
  }
  
});

 function nameValidation() {
  if (nameInput.value.length < 6) {
       invalid(
         nameInput,
         nameMessage,
           "your name must be bettwen 6 :10 characters"
    );
          return false;
  } else {
        valid(nameInput, nameMessage, "correct name");
  }
}

function emailValidation() {
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(emailInput.value)) {
         invalid(emailInput, emailMessage, "your email should be correct");
           return false;
  } else {
         valid(emailInput, emailMessage, "correct Email");
  }
}

function passwordValidation() {
  if (passwordInput.value.length < 8) {
         invalid(
           passwordInput,
           passwordMessage,
             "your password must be bettwen 8 :12 characters"
    );
            return false;
  } else {
         valid(passwordInput, passwordMessage, "correct passwords");
  }
}


function valid(input, elmMsg, msg) {
   input.style.borderBottom = "2px solid #2ecc71";
   elmMsg.style.color = "#2ecc71";
   elmMsg.style.display = "block";
   elmMsg.innerHTML = msg;
}
function invalid(input, elmMsg, msg) {
   input.style.borderBottom = "2px solid red";
   elmMsg.style.color = "red";
   elmMsg.innerHTML = msg;
   elmMsg.style.display = "block";
}

