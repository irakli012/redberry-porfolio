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
  