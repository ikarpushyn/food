import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector, modalTimerId) {
	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: 'img/form/spinner.svg',
		succsess: 'Thnk! we are contact you soon',
		failure: 'smth wrong',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display : block; 
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			// const r = new XMLHttpRequest();
			// r.open('POST', 'server.php');

			// r.setRequestHeader('Content-type', 'application/json');

			////Перебор обьекта
			// const object = {};
			// formData.forEach((value, key) => {
			// 	object[key] = value;
			// });

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			// const json = JSON.stringify(object);

			// r.send(json);
			// r.send(JSON.stringify(object));

			// r.addEventListener('load', () => {
			// 	if (r.status === 200) {
			// 		console.log(r.response);
			// 		showThanksModal(message.succsess);
			// 		form.reset();
			// 		statusMessage.remove();
			// 	} else {
			// 		showThanksModal(message.failure);
			// 	}
			// });

			//////POST BY FETCH

			postData('http://localhost:3000/requests', json /* JSON.stringify(object) */)
				.then((data) => {
					console.log(data);
					showThanksModal(message.succsess);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000);
	}

	fetch('http://localhost:3000/menu')
		.then((data) => data.json())
		.then((res) => console.log(res));
}
export default forms;
