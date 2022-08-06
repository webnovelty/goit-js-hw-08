import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let formData = {};
saveData();

const allDataSave = e => {
	formData[e.target.name] = e.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}


form.addEventListener('input', throttle(allDataSave, 500));

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
	e.preventDefault();
	e.currentTarget.reset();
	formData = {};
	localStorage.removeItem(STORAGE_KEY);
	console.log(formData);
}

function saveData() {
	let savedMessage = localStorage.getItem(STORAGE_KEY);
	if (savedMessage) {
		savedMessage = JSON.parse(savedMessage);
		Object.entries(savedMessage).forEach(([name, value]) => {
			formData[name] = value;
			form.elements[name].value = value;
		})
		// inputEl.value = savedMessage[`${inputEl.name}`];
		// textareaEl.value = savedMessage[`${textareaEl.name}`];

	}
}
