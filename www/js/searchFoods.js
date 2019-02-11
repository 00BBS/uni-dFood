const searchURL = "http://www.recipepuppy.com/api/?i=";

let divForSearchResults = document.querySelector('.results');

function searchFoodAPI(searchTerm){
	clearBox("results")
	console.log(searchURL+searchTerm);
	fetch(searchURL+searchTerm)
    .then(function (response) {
        if (response.status === 200){
        	return response.json();
        } 
        else{
        	reject("server error");
        }
    })
    .then((data) => {
    	updateResults(data, searchTerm);
    })
}

// update DOM
function updateResults(data, searchTerm){
	const results = data.results;

	if(results.length === 0){
		console.log("nothing");
	}
	else{
		results.forEach(food => {
			console.log(food.title);

	      	const h1 = document.createElement('h1');
	      	h1.textContent = food.title;
	      	//console.log(h1);

	      	const p = document.createElement('p');
	      	p.textContent = `${food.ingredients}...`;
	      	//console.log(p);


	      	const img = document.createElement("IMG");
	      	img.setAttribute('src', food.thumbnail);

	      	document.getElementById("results").appendChild(h1).appendChild(p).appendChild(img);
		});
	}
}