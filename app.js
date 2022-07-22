const submitButton = document.querySelector(".submitButton");
const proteinInput = document.getElementById("protein");
const calorieInput = document.getElementById("calorie");


submitButton.addEventListener('click', addinfo);


//functions

function addinfo(e){
    e.preventDefault();
    console.log("yoyo");
    proteinInput.value = "";
    calorieInput.value="";
    
}

