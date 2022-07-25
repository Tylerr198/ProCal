const submitButton = document.querySelector(".submitButton");
const proteinInput = document.getElementById('protein');
const calorieInput = document.getElementById("calorie");
const mealTimeInput = document.getElementById('mealTime')
const foodLogContainer = document.querySelector(".foodLog-container");


submitButton.addEventListener('click', addinfo);


//functions

function addinfo(e){
    //default stuff
    e.preventDefault();
  
    //div for new input
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('timeDiv');
    const newInputDiv = document.createElement('div');
    newInputDiv.classList.add('newInputDiv');
    console.log(mealTimeInput.value);

    //creating the new input
    const timeOfMeal = document.createElement('header');
    timeOfMeal.innerText = mealTimeInput.value;
    const newInput = document.createElement('li');
    newInput.innerHTML = proteinInput.value +"g protein, " + calorieInput.value +"cals";
    timeDiv.appendChild(timeOfMeal);
    newInputDiv.appendChild(newInput);
    timeDiv.appendChild(newInputDiv);
    foodLogContainer.appendChild(timeDiv);

    //reset input text boxes
    proteinInput.value ="";
    calorieInput.value="";
}