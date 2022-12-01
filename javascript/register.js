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
  const errorDisplay = inputControl.querySelector('.errorMessage');

  errorDisplay.innerText = message;
  inputControl.classList.add('errorMessage');
  inputControl.classList.remove('success')
}

const setSuccess = element =>
{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('errorMessage');

  errorDisplay.innerText= '';
  inputControl.classList.add('success');
  inputControl.classList.remove('errorMesssage');
}

const isValidEmail = email =>
{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
    setError(username, 'Username is required');
  }
  else{
    setSuccess(username);
  }

  if(emailValue === '')
  {
    setError(email, 'Email is required');
  }
  else if(!isValidEmail(emailValue)) 
  {
    setError(email, 'Provide a valid email address');
  }
  else{
    setSuccess(email);
  }

  if(passwordValue === '')
  {
    setError(password, 'Password is required');
  }
  else if(passwordValue.length <8)
  {
    setError(password, 'Password must be at least 8 character.');
  }
  else{
    setSuccess(password);
  }
};