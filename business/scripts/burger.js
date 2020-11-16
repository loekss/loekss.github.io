document.getElementById('js_burger').onclick = function() {
	document.getElementById('js_burger').classList.toggle('is-active');
	document.getElementById('js_navigation').classList.toggle('js_nav-active');
	document.body.classList.toggle('js_lock');
}

document.getElementById('js_navigation').onclick = function() {
	document.getElementById('js_burger').classList.remove('is-active');
	document.getElementById('js_navigation').classList.remove('js_nav-active');
	document.body.classList.remove('js_lock');
}

