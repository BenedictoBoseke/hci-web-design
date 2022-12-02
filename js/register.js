const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date = document.getElementById('date');
const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit');


form.addEventListener('submit', (e) => {

    checkInput();

    console.log(formValid());
    if(formValid() == true){
        form.submit();
     }
     
    else {
         e.preventDefault();
    }
    

});

function formValid(){
    const formCntrl = form.querySelectorAll('.form-control');
    const agreementValue = agreement.value.trim();
    let result = true;
    formCntrl.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    if(!agreement.checked){
        alert('You must agree to the terms first.');
       result = false;
    }
    else{
        console.log("Checkbox selected: ", agreement.checked);

    }

    return result;
}

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();  
    const password2Value = password2.value.trim();  
    const dateValue = date.value.trim();  

    if(usernameValue == ''){
        setErrorFor(username, 'Please Enter Your Name');
        
        
    }
    else if(usernameValue.length < 2){
        setErrorFor(username, 'Username Must Be 2 Character Or More');
    }

    else{
        setSuccesFor(username);
       
    }

    if(emailValue == ''){
        setErrorFor(email, 'Please Enter Your Email');
        
    
    }
    else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not A Valid Email');
        
       
    }
    else{
        setSuccesFor(email);
    }

    if(passwordValue == '')
    {
        setErrorFor(password, 'Please Enter Your Password');
    }
    else
    {
        setSuccessFor(password);
    }

    if(password2Value == '')
    {
        setErrorFor(password2, 'Confirmation Password Cannot Be Blank');
    }
    else if(passwordValue != password2Value)
    {
        setErrorFor(password2, 'Passwords Does Not Match');
    }
    else
    {
        setSuccessFor(password2);
    }

    if(dateValue == '')
    {
        setErrorFor(date, 'Please Enter Date ');
    }
    else
    {
        setSuccessFor(date);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    if(formControl.classList.contains('success')){
        formControl.classList.remove('success');
    }

    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
    if(formControl.classList.contains('error')){
        formControl.classList.remove('error');
    }
    formControl.classList.add('success');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}