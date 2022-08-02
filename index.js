const lengthEl = document.getElementById('passwordLength');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const genBtn = document.getElementById('genBtn');
const passwordOne = document.getElementById('passwordOne');
const passwordTwo = document.getElementById('passwordTwo');
const passwordThree = document.getElementById('passwordThree');
const passwordFour = document.getElementById('passwordFour');


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

genBtn.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    passwordOne.innerText = generatePasswordOne(hasLower, hasUpper, hasNumber, hasSymbol, length);
    passwordTwo.innerText = generatePasswordTwo(hasLower, hasUpper, hasNumber, hasSymbol, length);
    passwordThree.innerText = generatePasswordThree(hasLower, hasUpper, hasNumber, hasSymbol, length);
    passwordFour.innerText = generatePasswordFour(hasLower, hasUpper, hasNumber, hasSymbol, length);



})


function generatePasswordOne(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function generatePasswordTwo(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function generatePasswordThree(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function generatePasswordFour(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const randomSymbol = '!@#$%^&*()-+/\?'
    return randomSymbol[Math.floor(Math.random() * randomSymbol.length)]
}



