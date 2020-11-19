let body = document.body;
let gift = document.querySelector('.gift__wrapper');
let img0 = document.querySelector('.gift__img_0');
let img1 = document.querySelector('.gift__img_1');
let img2 = document.querySelector('.gift__img_2');
let img3 = document.querySelector('.gift__img_3');
let img4 = document.querySelector('.gift__img_4');
let img5 = document.querySelector('.gift__img_5');
let img6 = document.querySelector('.gift__img_6');
let img7 = document.querySelector('.gift__img_7');
let img8 = document.querySelector('.gift__img_8');
let img9 = document.querySelector('.gift__img_9');
let imgText = document.querySelector('.gift__text');

gift.onclick = function() {
	body.classList.add('body_lock');
	img0.classList.add('gift__img_anim-0');
	img1.classList.add('gift__img_anim-1');
	img2.classList.add('gift__img_anim-2');
	img3.classList.add('gift__img_anim-3');
	img4.classList.add('gift__img_anim-4');
	img5.classList.add('gift__img_anim-5');
	img6.classList.add('gift__img_anim-6');
	img7.classList.add('gift__img_anim-7');
	img8.classList.add('gift__img_anim-8');
	imgText.classList.add('gift__text_anim');
}