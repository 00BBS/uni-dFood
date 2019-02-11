function searchFoodAPI(URL, searchTerm, searchLocation){
	clearBox("results")
	console.log(URL);
	fetch(URL)
    .then(function (response) {
        if (response.status === 200){
        	return response.json();
        } 
        else{
        	reject("server error");
        }
    })
    .then((data) => {
    	updateResults(data, searchTerm, searchLocation);
    })
}

// update DOM
function updateResults(data, searchTerm, searchLocation){
	const results = data.recipes;


	if(results.length === 0){
		console.log("nothing");
		const error = document.createElement('p');
		error.textContent = "Sorry, no results were found for " + searchTerm;
		error.setAttribute('textAlign', 'center');

		document.getElementById(searchLocation).appendChild(error);
	}
	else if(searchLocation === "breakfast" || searchLocation === "lunch" || searchLocation === "dinner"){
		generateMeal(data, searchLocation);
	}
	else{
		results.forEach(food => {
			console.log(food.title);

	      	const h1 = document.createElement('h1');
	      	food.title = food.title.substring(0, 100);
	      	h1.textContent = food.title;
	      	h1.setAttribute('textAlign', 'center');

	      	const img = document.createElement("IMG");
	      	img.setAttribute('src', food.image_url);
	      	img.setAttribute('class', 'middle');

	      	document.getElementById(searchLocation).appendChild(h1).appendChild(img);
		});
	}
}

// generate a random meal plan

function generateMeal(data, searchLocation){
	var max = data.count;
	var min = 0;
	var generatedMealIndex = Math.floor(Math.random() * max) + min;
	console.log("meal index: " + generatedMealIndex);
	var meal = data.recipes[generatedMealIndex];
	// update DOM
  	const mealHeader = document.createElement('h1');
  	mealHeader.textContent = meal.title;
  	mealHeader.setAttribute('textAlign', 'center');

  	const mealImg = document.createElement("IMG");
  	mealImg.setAttribute('src', meal.image_url);
  	mealImg.setAttribute('width', '80%');
  	mealImg.setAttribute('class', 'middle');

  	document.getElementById(searchLocation).appendChild(mealHeader).appendChild(mealImg);
}