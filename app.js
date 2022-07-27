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
    console.log(proteinInput)
    if (proteinInput.value === "" || calorieInput.value === ""){
      return false;
    } else{
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
      newInput.innerHTML = proteinInput.value +"g protein, " + calorieInput.value +" calories";
      timeDiv.appendChild(timeOfMeal);
      newInputDiv.appendChild(newInput);
      timeDiv.appendChild(newInputDiv);
      foodLogContainer.appendChild(timeDiv);
      saveLocalProtein(proteinInput.value);
      saveLocalCalorie(calorieInput.value);
      saveLocalMealtime(mealTimeInput.value);

      //reset input text boxes
      proteinInput.value ="";
      calorieInput.value="";
    }
}

function saveLocalProtein(proteinInfo) {
    let protein;
    if (localStorage.getItem("protein") === null) {
      protein = [];
    } else {
      protein = JSON.parse(localStorage.getItem("protein"));
    }
    protein.push(proteinInfo);
    localStorage.setItem("protein", JSON.stringify(protein));
  }

  function saveLocalCalorie(calorieInfo) {
    let calorie;
    if (localStorage.getItem("calorie") === null) {
      calorie = [];
    } else {
      calorie = JSON.parse(localStorage.getItem("calorie"));
    }
    calorie.push(calorieInfo);
    localStorage.setItem("calorie", JSON.stringify(calorie));
  }

  function saveLocalMealtime(mealTime) {
    let mealTimes;
    if (localStorage.getItem("mealTimes") === null) {
      mealTimes = [];
    } else {
      mealTimes = JSON.parse(localStorage.getItem("mealTimes"));
    }
    mealTimes.push(mealTime);
    localStorage.setItem("mealTimes", JSON.stringify(mealTimes));
  }


  function getInfo(e){
    if (localStorage.getItem("protein") === null) {
        protein = [];
      } else {
        protein = JSON.parse(localStorage.getItem("protein"));
        calorie = JSON.parse(localStorage.getItem("calorie"));
        mealTimes = JSON.parse(localStorage.getItem("mealTimes"));
      }
    for (let i = 0; i<protein.length; i++){
      const timeDiv = document.createElement('div');
      timeDiv.classList.add('timeDiv');
      const newInputDiv = document.createElement('div');
      newInputDiv.classList.add('newInputDiv');
      

      //creating the new input
      const timeOfMeal = document.createElement('header');
      timeOfMeal.innerText = mealTimes[i];
      const newInput = document.createElement('li');
      newInput.innerHTML = protein[i] +"g protein, " + calorie[i] +" calories";
      timeDiv.appendChild(timeOfMeal);
      newInputDiv.appendChild(newInput);
      timeDiv.appendChild(newInputDiv);
      foodLogContainer.appendChild(timeDiv);
    }
  }

getInfo();





