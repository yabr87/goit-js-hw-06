const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget; //form.elements масив значень деструктиризація

  if (email.value === '' || password.value === '') {
    return alert('Будь ласка заповніть всі поля!');
  }

  console.log({ Email: email.value, Password: password.value });
  event.currentTarget.reset();
}

// console.log(form.email.value);
// console.log(form.password.value);
// console.log(form.elements);
