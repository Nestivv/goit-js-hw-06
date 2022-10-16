const form = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены!');
  }
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  console.log(dataForm);
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
