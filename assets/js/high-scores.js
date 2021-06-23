// retrieve items from localStorage and create array
var highScore = document.querySelector("#high-score");

highScore.textContent = `${localStorage.getItem("score")} ${localStorage.getItem("handle")}`
console.log(highScore.textContent);

// display array on high-scores page, descending order

// prompt user for name
// create object with name and score; push object into array

// sort array by high score

// delete 
