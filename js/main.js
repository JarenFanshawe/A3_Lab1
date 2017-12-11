(function() {

	var theImages = document.querySelectorAll('.data-ref');

	function getChangeElements() {
		const url = './includes/functions.php?carModel=' + this.id;

		fetch(url) //do an AJAX call with fetch
		.then((resp) => resp.json()) //convert to JSON
		.then({ modelName, priceing, modelDetails } => {
			processResult(data);
		}) // call the process function
		.catch(function(error) {
			console.log(error);
		});

	function processResult(data) {
		const { modelName, pricing, modelDetails} = data;

		let model = document.querySelector('.modelName').textContent = modelName;
		let price = document.querySelector('.priceInfo').innerHTML = pricing;
		let desc = document.querySelector('.modelDetails').textContent = modelDetails;

		theImages.forEach(function(image, index){
			image.classList.add("nonActive");
		});

		document.querySelector(`#${data.model}`).classList.remove("nonActive");
	}

	theImages.forEach(function(image, index){
		image.addEventListener('click', getChangeElements, false);
	});

	//document.querySelector('#spring').click();
	getChangeElements.call(document.querySelector("#F55"));


})();
