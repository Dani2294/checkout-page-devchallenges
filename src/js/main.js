// Caching the dom
const checkoutForm = document.getElementById('checkout-form');
const saveInfo = document.getElementById('save-info');
const item1MinusBtn = document.getElementById('item1-minus-btn');
const item1PlusBtn = document.getElementById('item1-plus-btn');
const item1 = document.getElementById('item1');

const item2MinusBtn = document.getElementById('item2-minus-btn');
const item2PlusBtn = document.getElementById('item2-plus-btn');
const item2 = document.getElementById('item2');

const totalPrice = document.getElementById('total-price');

// Initiate variables
const item1Price = 54.99;
const item2Price = 74.99;
const shippingPrice = 19;
let item1Count = 0;
let item2Count = 0;

// Function who will be called whenever the price change
function updateTotalPrice() {
	let totalValue = item1Count * item1Price + item2Count * item2Price;
	totalPrice.innerText = `$${(totalValue + shippingPrice).toFixed(2)}`;
}

// Events handler
checkoutForm.addEventListener('submit', (e) => {
	e.preventDefault();
	alert('Succes! everything seems ok! ✅');
});

item1MinusBtn.addEventListener('click', () => {
	if (item1Count === 0) return;
	item1Count--;
	item1.innerText = item1Count;
	updateTotalPrice();
});
item1PlusBtn.addEventListener('click', () => {
	item1Count++;
	item1.innerText = item1Count;
	updateTotalPrice();
});

item2MinusBtn.addEventListener('click', () => {
	if (item2Count === 0) return;
	item2Count--;
	item2.innerText = item2Count;
	updateTotalPrice();
});
item2PlusBtn.addEventListener('click', () => {
	item2Count++;
	item2.innerText = item2Count;
	updateTotalPrice();
});

const allInput = document.querySelectorAll('.custom-input');

saveInfo.addEventListener('change', (e) => {
	console.log(allInput);
	const inputsValue = [];

	// Looping through all inputs and pushing their value (if exist) to the precedent created array
	allInput.forEach((input) => {
		const inputName = input.name;
		if (input.value === '') return;
		const newData = [inputName, input.value];
		inputsValue.push(newData);
	});

	// If the user check the save info the value typed-in will be stored in local storage else they will not
	if (saveInfo.checked) {
		localStorage.setItem('inputs-value', JSON.stringify(inputsValue));
	} else {
		localStorage.removeItem('inputs-value');
	}
});

if (window.location.reload && localStorage.getItem('inputs-value')) {
	console.log('reload');

	// If the user decide to save their info typed-in the save info checkbox will checked by default and all the input will be populate with the corresponding value
	saveInfo.checked = true;
	const inputsValue = JSON.parse(localStorage.getItem('inputs-value'));
	allInput.forEach((input, idx) => {
		input.value = inputsValue[idx][1];
	});
}
