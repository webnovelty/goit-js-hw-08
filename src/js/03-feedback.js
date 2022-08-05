import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = form.querySelector('input');
const textareaEl = form.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";
const formData = {};

const allDataSave = e => {
	formData[e.target.name] = e.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}
saveData();

form.addEventListener('input', throttle(allDataSave, 500));

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
	e.preventDefault();
	e.currentTarget.reset();
	console.log(formData);
	localStorage.removeItem(STORAGE_KEY);

}

function saveData() {
	const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (savedMessage) {
		inputEl.value = savedMessage[`${inputEl.name}`];
		textareaEl.value = savedMessage[`${textareaEl.name}`];

	}
}
