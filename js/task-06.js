const inputEL = document.querySelector('#validation-input');
const inputDataLength = Number(inputEL.dataset.length);

inputEL.addEventListener('blur', (event) => {
  const inputValueLength = event.currentTarget.value.length;

  if (inputValueLength === inputDataLength) {
    inputEL.className = 'valid';
  } else if (event.currentTarget.value === '') {
    inputEL.className = '';
  } else {
    inputEL.className = 'invalid';
  }
});
