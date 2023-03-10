// BTN FUNCTIONALITY

let backBtn = document.getElementById('back-button');
backBtn.onclick = () => {
  history.back();
};

// NAME AND LAST NAME VALIDATION

function validateInput(input) {
    const regex = /^[ა-ჰ]{2,}$/; 
    const isValid = regex.test(input.value);
    const inputContainer = input.parentNode;
    const errorImg = inputContainer.querySelector(".error-img");
    const successImg = inputContainer.querySelector(".success-img");
    
    if (isValid) {
      errorImg.classList.remove("show");
      successImg.classList.add("show");
    } else {
      errorImg.classList.add("show");
      successImg.classList.remove("show");
    }
  }
  
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((input) => {
    input.addEventListener("input", () => {
      validateInput(input);
    });
  });

// REAL TIME OUTPUT OF NAME AND LAST NAME AT THE RIGHT SIDE OF THE PAGE

const firstNameInput = document.getElementById("name");
const firstNameOutput = document.getElementById("name-output");
const lastNameInput = document.getElementById("last-name");
const lastNameOutput = document.getElementById("last-name-output");

firstNameInput.addEventListener("input", () => {
  firstNameOutput.textContent = firstNameInput.value;
});

lastNameInput.addEventListener("input", () => {
  lastNameOutput.textContent = lastNameInput.value;
});
  
// DISPLAY UPLOADED PICTURE

const input = document.getElementById('photo-upload');
const img = document.getElementById('uploaded-img');

input.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    img.src = event.target.result;
  });

  reader.readAsDataURL(file);
});

// DISPLAY ABOUT ME TEXT TO RIGHT SIDE

const aboutmeInput = document.getElementById("aboutme");
const aboutmeOutput = document.getElementById("aboutme-output");

aboutmeInput.addEventListener("input", () => {
  const value = aboutmeInput.value;
  const newOutput = value.replace(/(.{30})/g, "$1<br>");
  if (value.startsWith("")) {
    aboutmeOutput.innerHTML = `<div class="aboutme"><h2>ჩემ შესახებ</h2></div>${newOutput}`;
  } else {
    aboutmeOutput.innerHTML = newOutput;
  }
});

// GMAIL VALIDATION AND WRITE IN THE RIGHT SIDE

const emailInput = document.getElementById("email-input");
const validationMessage = document.getElementById("email-validation-message");
const successImg = document.getElementById("success-img");
const errorImg = document.getElementById("error-img");
const vectorImg = document.getElementById("vector-img");
const emailOutput = document.getElementById("email-output");

emailInput.addEventListener("keyup", function() {
  const email = emailInput.value;
  const isValid = validateEmail(email);
  if (isValid) {
    validationMessage.textContent = "Valid email!";
    validationMessage.style.color = "green";
    successImg.style.display = "inline";
    errorImg.style.display = "none";
  } else {
    validationMessage.textContent = "Invalid email. Must end with @redberry.ge";
    validationMessage.style.color = "red";
    successImg.style.display = "none";
    errorImg.style.display = "inline";
  }
  emailOutput.textContent = email;
});

function validateEmail(email) {
  const regex = /@redberry\.ge$/;
  return regex.test(email);
}
