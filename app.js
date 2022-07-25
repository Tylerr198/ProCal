const submitButton = document.querySelector(".submitButton");
const proteinInput = document.getElementById("protein");
const calorieInput = document.getElementById("calorie");
const newinfo = 


submitButton.addEventListener('click', addinfo);


//functions

function addinfo(e){
    e.preventDefault();
    proteinInput.value = "";
    calorieInput.value="";

    const infoDiv = document.createElement('div');
    infoDiv.classList.add("info-item");

    const newInfo = document.createElement('li');
    newInfo.innerText = "yoyo";
    newInfo.classList.add("info")
    infoDiv.appendChild(foodInfo);
    
}
