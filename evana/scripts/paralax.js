$('#banner').on('mousemove', (e) => {
	const x = e.pageX;
	const y = e.pageY;

	$('.js_mouse-paralax').css(
		'transform',
		'translate(-' + x * 0.02 + 'px, -' + y * 0.02 + 'px)'
	);

	$('.js_mouse-paralax_reverse').css(
		'transform',
		'translate(' + x * 0.02 + 'px, ' + y * 0.02 + 'px)'
	);
});
