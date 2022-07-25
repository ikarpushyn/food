import 'promise-polyfill/src/polyfill';
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2022-07-30');
	cards();
	calc();
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});

	////TIMER
	////MODAL
	////USE CLASS FOR CARD
	// getResource('http://localhost:3000/menu').then((data) => createCard(data));
	// function createCard(data) {
	// 	data.forEach(({ img, altimg, title, descr, price }) => {
	// 		const element = document.createElement('div');
	// 		price = price * 28;
	// 		element.classList.add('menu__item');
	// 		element.innerHTML = `
	// 			<img src=${img} alt=${altimg} />
	// 			<h3 class="menu__item-subtitle">${title}</h3>
	// 				<div class="menu__item-descr">${descr}</div>
	// 			<div class="menu__item-divider"></div>
	// 			<div class="menu__item-price">
	// 			<div class="menu__item-cost">Цена:</div>
	// 			<div class="menu__item-total"><span>${price}</span> грн/день</div>
	// 			</div>
	// 			`;
	// 		document.querySelector('.menu .container').append(element);
	// 	});
	// }
	// new MenuCard(
	// 	'img/tabs/vegy.jpg',
	// 	'vegy',
	// 	'Меню "Фитнес"',
	// 	`Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
	// 	овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый
	// 	продукт с оптимальной ценой и высоким качеством!`,
	// 	9,
	// 	'.menu .container'
	// ).render();
	// new MenuCard(
	// 	'img/tabs/elite.jpg',
	// 	'elite',
	// 	'Меню “Премиум”',
	// 	`В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
	// 	качественное исполнение блюд. Красная рыба, морепродукты, фрукты -
	// 	ресторанное меню без похода в ресторан!
	// 	 <br><br>
	// 	`,
	// 	14,
	// 	'.menu .container'
	// ).render();
	// new MenuCard(
	// 	'img/tabs/post.jpg',
	// 	'post',
	// 	'Меню "Постное"',
	// 	`Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
	// 	продуктов животного происхождения, молоко из миндаля, овса, кокоса или
	// 	гречки, правильное количество белков за счет тофу и импортных
	// 	вегетарианских стейков.`,
	// 	15,
	// 	'.menu .container'
	// ).render();
	// const div = new MenuCard();
	// div.render();
	////FORMS
	///////SLIDER
	//CALC
});
