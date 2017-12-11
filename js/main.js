(function() {

	var carButtons = document.querySelectorAll('.data-ref');

	function getCarData() {
		const url = './includes/functions.php?carModel=' + this.id;

		fetch(url) //do an AJAX call with fetch
		.then((resp) => resp.json()) //convert to JSON
		.then(({ modelName, pricing, modelDetails, model }) => {
			let carModel = document.querySelector('.modelName').textContent = modelName;
			let price = document.querySelector('.priceInfo').innerHTML = pricing;
			let desc = document.querySelector('.modelDetails').textContent = modelDetails;

			carButtons.forEach(function(image, index){
				image.classList.add("nonActive");
			});

			document.querySelector(`#${model}`).classList.remove("nonActive");
		}) // call the process function

		.catch(function(error) {
			console.log(error);
		});
}

	carButtons.forEach(function(image, index){
		image.addEventListener('click', getCarData, false);
	});

	//document.querySelector('#spring').click();
	getCarData.call(document.querySelector("#F55"));


})();
