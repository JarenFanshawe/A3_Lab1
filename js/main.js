(function() {
	var theImages = document.querySelectorAll('.data-ref'),
	modelName = document.querySelector('.modelName'),
	priceInfo = document.querySelector('.priceInfo'),
	modelDetails = document.querySelector('.modelDetails');

	function changeElements() {

		let objectIndex = carData [this.id];

		modelName.firstChild.nodeValue = objectIndex.model;
		priceInfo.firstChild.nodeValue = objectIndex.price;
		modelDetails.firstChild.nodeValue = objectIndex.description;

		theImages.forEach(function(image, index){

			image.classList.add("nonActive");
		});

		this.classList.remove("nonActive");
	}

	theImages.forEach(function(image, index){

		image.addEventListener('click', changeElements, false);
	});

	//document.querySelector('#spring').click();
	changeElements.call(document.querySelector("#F55"));


})();
