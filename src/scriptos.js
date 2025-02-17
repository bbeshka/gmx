window.onload = function () {
	document
		.querySelector("#carouselExampleIndicators1 > button.carousel-control-next")
		.addEventListener("click", function () {
			new bootstrap.Carousel(
				document.querySelector("#carouselExampleIndicators")
			).next();
		});

	document
		.querySelector("#carouselExampleIndicators1 > button.carousel-control-prev")
		.addEventListener("click", function () {
			new bootstrap.Carousel(
				document.querySelector("#carouselExampleIndicators")
			).prev();
		});

	document
		.querySelector("#carouselExampleIndicators > button.carousel-control-next")
		.addEventListener("click", function () {
			new bootstrap.Carousel(
				document.querySelector("#carouselExampleIndicators1")
			).next();
		});

	document
		.querySelector("#carouselExampleIndicators > button.carousel-control-prev")
		.addEventListener("click", function () {
			new bootstrap.Carousel(
				document.querySelector("#carouselExampleIndicators1")
			).prev();
		});

	document
		.querySelector("#carouselExampleIndicators1 > div.carousel-indicators")
		.childNodes.forEach((e, i) => {
			e.addEventListener("click", function () {
				document
					.querySelector("#carouselExampleIndicators > div.carousel-indicators")
					.childNodes[i].click();
			});
		});

	document
		.querySelector("#carouselExampleIndicators > div.carousel-indicators")
		.childNodes.forEach((e, i) => {
			e.addEventListener("click", function () {
				document
					.querySelector(
						"#carouselExampleIndicators1 > div.carousel-indicators"
					)
					.childNodes[i].click();
			});
		});
};
