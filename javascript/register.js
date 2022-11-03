const fillForm = document.getElementById('fillForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const agreement = document.getElementById('agreement');

fillForm.addEventListener('submit', e =>
{
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.QuerySelector
}

const validateInputs =() => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const dateValue = date.value.trim();
  const genderValue = gender.value.trim();
  const agreementValue = agreement.value.trim();

  if (usernameValue === '')
  {

  }
};