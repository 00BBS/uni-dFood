function listAdd(searchLocation, ID){
	ons.notification.prompt('Entering ' + searchLocation, {title: searchLocation} ).then(function (data){
		if(data !== ""){
			const item = document.createElement('div');
			item.innerHTML = 
			`<ons-list-item id="${data}">${data}
				<div class="right">
					<ons-button modifier="quiet" onclick=listDelete("${data}")><i class="icon ion-close-round"></i></ons-button>
				</div>
			</ons-list-item>`;
			document.getElementById(ID).appendChild(item);
		}
		else{
			ons.notification.alert('Entered nothing!');
		}
	});
};

function listDelete(deleteID){
	var item = document.getElementById(deleteID);
	item.remove();
 }