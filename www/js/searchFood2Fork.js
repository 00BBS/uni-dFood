function searchFoodAPI(URL, searchTerm, searchLocation){
	clearBox(searchLocation);
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
    	// temporary searchTerm, need to update - incase user searches "recipe"
    	if(searchTerm === "recipe"){
    		updateFoodPage(data, searchLocation);
    	}
    	else{
    		updateResults(data, searchTerm, searchLocation);
    	}
    })
}


// update DOM with search results
function updateResults(data, searchTerm, searchLocation){
	const results = data.recipes;


	if(results.length === 0){
		//console.log("nothing");
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
			//console.log(food.title);
	      	formatData(food, searchLocation);
		});
	}
}

function formatData(food, searchLocation){
	const h1 = document.createElement('h1');
  	food.title = food.title.substring(0, 100);
  	h1.textContent = food.title;
  	h1.setAttribute('textAlign', 'center');

  	const img = document.createElement("IMG");
  	img.setAttribute('src', food.image_url);
  	img.setAttribute('width', 200);
  	img.setAttribute('height', 200);
  	// use template literal to pass variable
  	img.setAttribute('onclick', `searchRecipe("${food.recipe_id}","${searchLocation}");`);
  	document.getElementById(searchLocation).appendChild(h1).appendChild(img);
}



// generate a random meal plan
function generateMeal(data, searchLocation){
	var max = data.count;
	var min = 0;
	var generatedMealIndex = Math.floor(Math.random() * max) + min;
	console.log("meal index: " + generatedMealIndex);
	var meal = data.recipes[generatedMealIndex];
	// update DOM
  	formatData(meal, searchLocation);
}



// function which updates the search page with the selected meals information
function updateFoodPage(data, searchLocation){
	const recipe = data.recipe.ingredients;
	const foodData = data.recipe;
	formatData(foodData, searchLocation);
	console.log(searchLocation);
	//  add recipe
	recipe.forEach(ingredient =>{
		const p = document.createElement('p');
		p.textContent = ingredient;
		document.getElementById(searchLocation).appendChild(p);
	});
}



