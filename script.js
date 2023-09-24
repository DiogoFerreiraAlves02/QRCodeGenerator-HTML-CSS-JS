const qrDiv = document.querySelector(".qr-div");
const qrImg = document.querySelector(".qr-img");
const inputText = document.querySelector(".input-text");
const qrText = document.querySelector(".qr-text");
const btnGenerate = document.querySelector(".button-generate");

function generateQR(){
    if(inputText.value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
        qrDiv.classList.add("show-img");
        qrText.innerHTML = inputText.value;
        inputText.value = "";
    }
    else{
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000);
    }
}

inputText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnGenerate.click();
    }
  });

