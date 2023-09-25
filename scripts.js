/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
/*
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0)
    {
        nameError.innerHTML = ' Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    
    nameError.innerHTML = <i class="fa-solid fa-circle-check"></i>
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be  10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digit please';
        return false;
    }
    phoneError.innerHTML = <i class="fa-solid fa-circle-check"></i>
    return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = <i class="fa-solid fa-circle-check"></i>
    return true;
    
}


function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required=30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = <i class="fa-solid fa-circle-check"></i>
    return true;
    
}
function validateForm(){
    if(!validateName()|| !validatePhone() || !validateEmail() ||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='please fix error to submit';
        setTimeout(function(){submitError.style.display='none'},3000);
        return false;
    }
}

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateName() {
    const nameValue = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    if (nameValue === '') {
        nameError.textContent = 'Name is required';
        return false;
    }
    nameError.textContent = ''; // Clear error message
    return true;
}

function validateMobile() {
    const mobileValue = mobileInput.value.trim();
    const mobileError = document.getElementById('mobileError');
    const mobileRegex = /^\d{10}$/; // Assumes a 10-digit mobile number
    if (!mobileRegex.test(mobileValue)) {
        mobileError.textContent = 'Please enter a valid 10-digit mobile number';
        return false;
    }
    mobileError.textContent = '';
    return true;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    const messageError = document.getElementById('messageError');
    if (messageValue === '') {
        messageError.textContent = 'Message is required';
        return false;
    }
    messageError.textContent = '';
    return true;
}

form.addEventListener('submit', function (e) {
    if (!validateName() || !validateMobile() || !validateEmail() || !validateMessage()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm() {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
   
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

   
    
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
   
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

   
    return true;
}
*/
var nameError =document.getElementById('name-error');
var phoneError =document.getElementById('phone-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('submit-error');

function  validateName(){
  var name=document.getElementById('condact-name').value;
  if(name.length == 0){
    nameError.innerHTML ='Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
    nameError.innerHTML ='write full name';
    return false;
  }
  nameError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}

function  validatePhone(){
  var phone=document.getElementById('condact-phone').value;
  if(phone.length ==0 ){
    phoneError.innerHTML ='Phone number is required';
    return false;
  }
  if(phone.length!==10){
    phoneError.innerHTML ='Phone number should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
  phoneError.innerHTML='Only digit please';
  return false;
  }
  phoneError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}

function  validateEmail(){
  var email=document.getElementById('condact-email').value;
  if(email.length ==0 ){
    emailError.innerHTML='Email is required';
    return false;
  }
  if(!email.match(/^[A-za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email invalid';
    return false;
  }
  emailError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}
function validateMessage(){
  var message=document.getElementById('condact-message').value;
  var required=30;
  var left= required - message.length;
  if(left>0){
    messageError.innerHTML=left +'more characters required';
    return false;
  }
  messageError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;

}

function validateForm(){
 if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
  submitError.style.display='block';
  submitError.innerHTML='please fix error to submit';
  setTimeout(function(){submitError.style.display='none'},3000);
  return false;
 }

}




