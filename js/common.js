$(function(){
	$(".btnMap > a").click(function(){
		$(this).parent().toggleClass("active");
	});

	$(".btnSound").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).html("DOCENT OFF");
		}else{
			$(this).addClass("on");
			$(this).html("DOCENT ON");
		}
	});

	$("#btnLNB").on("mouseover", function(){
		$(this).addClass("on");
		$("#boxLNB").addClass("on");
	});

	$("#boxLNB > a.close").click(function(e){
		e.preventDefault();
		$("#boxLNB").removeClass("on");
		$("#btnLNB").removeClass("on");
	});

	var mainProduct = new Swiper('.boxProduct .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		navigation: {
			nextEl: '.boxProduct .swiper-button-next',
			prevEl: '.boxProduct .swiper-button-prev',
		},
	});

	var mainBrand = new Swiper('.boxMainBrand .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		navigation: {
			nextEl: '.boxMainBrand .swiper-button-next',
			prevEl: '.boxMainBrand .swiper-button-prev',
		},
	});

	var listItem = new Swiper('.itemListTop .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 40,
		navigation: {
			nextEl: '.itemListTop .swiper-button-next',
			prevEl: '.itemListTop .swiper-button-prev',
		},
	});
});