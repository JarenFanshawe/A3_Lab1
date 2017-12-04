(function() {

	var theImages = document.querySelectorAll('.data-ref');

	const httpRequest = new XMLHttpRequest();

	function getChangeElements() {
		if (!httpRequest) {
			alert('giving up...browser not supported');
			return false;
		}

		httpRequest.onreadystatechange = processRequest;
		httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
		httpRequest.send();
	};

	function processRequest() {
	    let reqIndicator = document.querySelector('.request-state');
	    reqIndicator.textContent = httpRequest.readyState;
debugger;
	    if (httpRequest.readyState === XMLHttpRequest.DONE) {
	      if (httpRequest.status === 200) { // 200 means everything is awesome
debugger;
	        let data = JSON.parse(httpRequest.responseText);

	        processResult(data);
	      } else {
	        alert('There was a problem with the request.');
	      }
	    }
	}

	function processResult(data) {
		const { model, price, description} = data;

		let modelName = document.querySelector('.modelName').textContent = model;
		let priceInfo = document.querySelector('.priceInfo').innerHTML = price;
		let modelDetails = document.querySelector('.modelDetails').textContent = description;

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
