// DOM elements
const resultElement = document.getElementById('result');
const clipboardElement = document.getElementById('clipboard');
const lengthElement = document.getElementById('length_disp');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateElement.addEventListener('click', () => {
  const length = parseInt(lengthElement.innerHTML);
  console.log(length);
  const hasUpper = uppercaseElement.checked;
  const hasLower = lowercaseElement.checked;
  const hasNumbers = numbersElement.checked;
  const hasSymbols = symbolsElement.checked;

  resultElement.innerText = generatePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols);
});

function handleUpperChange() {
  let id = document.getElementById('uppercase');
  if (id.parentElement.classList.contains('line-through')) {
    id.parentElement.classList.remove('line-through');
  } else {
    id.parentElement.classList.add('line-through');
  }
}

function handleLowerChange() {
  let id = document.getElementById('lowercase');
  if (id.parentElement.classList.contains('line-through')) {
    id.parentElement.classList.remove('line-through');
  } else {
    id.parentElement.classList.add('line-through');
  }
}

function handleNumbersChange() {
  let id = document.getElementById('numbers');
  if (id.parentElement.classList.contains('line-through')) {
    id.parentElement.classList.remove('line-through');
  } else {
    id.parentElement.classList.add('line-through');
  }
}

function handleSymbolsChange() {
  let id = document.getElementById('symbols');
  if (id.parentElement.classList.contains('line-through')) {
    id.parentElement.classList.remove('line-through');
  } else {
    id.parentElement.classList.add('line-through');
  }
}

// Length slider
const lengthSlider = document.getElementById('length');
let output = document.getElementById('length_disp');
output.innerHTML = lengthSlider.value;
lengthSlider.oninput = function() {
  output.innerHTML = this.value;
};

// Copy password to clipboard
clipboardElement.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultElement.innerText;
  const msg = document.getElementById('msg');

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  //alert('Password copied to clipboard!');
  msg.classList.add('fade-out');
  msg.innerText = 'Copied!';
  setTimeout(() => {
    msg.classList.remove('fade-out');
    msg.innerText = '';
  }, 2000);
});

// Generate password function
function generatePassword(length, upper, lower, number, symbol) {
  // 1. Init pw var
  let generatedPassword = '';
  // 2. filter out unchecked types
  const typesCount = upper + lower + number + symbol;
  // console.log(`types count: ${typesCount}`);
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter((item) => Object.values(item)[0]);
  // console.log('typesArr: ' + typesArr);
  if (typesCount === 0) {
    return '';
  }
  // 3. loop over the length call generator function for each type
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // console.log('funcName: ' + funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  // console.log(generatedPassword.slice(0, length));
  // 4. Add generated pw to the pw var and return
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// Generator functions - https://ascii.cl/htmlcodes.htm
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()<>+?={}[],.£';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
