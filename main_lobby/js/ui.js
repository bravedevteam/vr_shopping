

//
// $(function () {
// 	$(".container").css('min-height',window.innerHeight);
// });


function popupClose(name){
	$('.container').removeClass('overlay');
	$('article.popup-'+name+'').hide();
	$('article.overlay-layer').remove();
}

function popupOpen(name){
	$('.container').addClass('overlay');
	$('article.popup-'+name+'').show();
	$('body').append(createOverlay());
}

function popupOpenInner(name){
	$('article.popup-'+name+'').show().addClass('depth1');
	$('.container').addClass('depth1');
}

function popupCloseDirect(e){

	$(e).parents('article.popup').hide();
	$('.container').removeClass('overlay');
}

function createOverlay(){
	return '<article class="overlay-layer"></article>';
}


function popupCloseInner(e){
	$(e).parents('article.popup').hide().removeClass('depth1');
	$('.container').removeClass('depth1');
}




$('header nav li').on('mouseenter',function (){

	var _idx = $(this).index();

	$('header .sub-menu .sub-menu-wrap .sub-menu-box').hide().eq(_idx).show();
})

$('header').on('mouseleave',function (){

	$('header .sub-menu .sub-menu-wrap .sub-menu-box').hide();
})




// 언어변경
// 모바일 메뉴 열기
function mobileMenuOpen() {
	$('.container').addClass('overlay')
	$('nav.lnb').show("slide", {direction: "left"});
	// scrollDisable();
}

// 모바일 메뉴 닫기
function mobileMenuClose() {
	$('nav.lnb').hide("slide", {direction: "left"});
	$('.container').removeClass('overlay');
	// scrollAble();
}

$('body').on('click',function (event){


	if($(event.target).parents('.lnb').length){

	}else{

		if($('nav.lnb').is(':visible')){
			mobileMenuClose();
		}
	}
})

function keywordOpen(){

	$('header .keyword-box').show();
}

function keywordClose(){
	$('header .keyword-box').hide();
}


// function scrollDisable(){
// 	$('html, body').addClass('scrollHidden').on('scroll touchmove mousewheel', function(e){
// 		e.preventDefault();
// 	});
// }
// function scrollAble(){
// 	$('html, body').removeClass('scrollHidden');
// }