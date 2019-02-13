// This is a FILLER file, please make sure to visit Food2Fork.com to get access to an API Key
// Once you have collected your key, replace API_KEY with it

const foodSearchURL = "https://www.food2fork.com/api/search?key=";
const recipeDataURL = "https://www.food2fork.com/api/get?key=";
const APIKey = "ADD_YOUR_API_KEY";

function loadSearch(food, searchLocation){
	const foodURL = foodSearchURL+APIKey+"&q="+food;
	searchFoodAPI(foodURL,food,searchLocation);
}

function searchRecipe(recipeID, searchLocation){
	const recipeURL = recipeDataURL + APIKey + "&rId=" +recipeID;
	searchFoodAPI(recipeURL, "recipe", searchLocation);
}