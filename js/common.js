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

	var mainBrand = new Swiper('.boxMainBrand .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		navigation: {
			nextEl: '.boxMainBrand .swiper-button-next',
			prevEl: '.boxMainBrand .swiper-button-prev',
		},
	});
});