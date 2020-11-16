document.getElementById('js_burger').onclick = function() {
	document.getElementById('js_burger').classList.toggle('js_burger-active');
	document.getElementById('js_navigation').classList.toggle('js_nav-active');
	document.body.classList.toggle('js_lock');
}

document.getElementById('js_navigation').onclick = function() {
	document.getElementById('js_burger').classList.remove('js_burger-active');
	document.getElementById('js_navigation').classList.remove('js_nav-active');
	document.body.classList.remove('js_lock');
}


window.onscroll = function showHeader() {
	var header = document.querySelector('#header');
	if(window.pageYOffset > 200){
		header.classList.add('js_header_fixed');
	} else{
		header.classList.remove('js_header_fixed');
	}
}

$(document).ready(function(){
	$(".slider").slick();
})


