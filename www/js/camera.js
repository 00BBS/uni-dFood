// this notation refers to the function as a property of an object
let cam = {
	init: function(){
		document.getElementById("cameraButton").addEventListener('click', cam.takephoto);
	},
	takephoto: function(){
		let options = {
			quality: 100,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.CAMERA,
			mediaType: Camera.MediaType.PICTURE,
			encodingType: Camera.EncodingType.JPEG,
			cameraDirection: Camera.Direction.BACK,
			targetWidth: 150,
			targetHeight: 150,
		}
		navigator.camera.getPicture(cam.work, cam.fail, options);

	},
	work: function(imageURI){
		const div = document.createElement('div');
		div.innerHTML = `<ons-col class = "picWrapper"> <img src =` + imageURI+` class="picThumbnail"></ons-col>`;
		document.getElementById("photoContent").appendChild(div);

	},
	fail: function(msg){
		//document.getElementById("msg").textContent = msg;
	}
}
document.addEventListener('deviceready',cam.init);