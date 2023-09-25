

const scriptURL = "https://script.google.com/macros/s/AKfycbyXBd67C87AfVG2PnKXvm_J1bnTylMiufYHJhMo_2JFiRx83xKa_i2l5agTv_LWxC7_/exec";

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        if (response.ok) {
            alert("Thank you! Your form is submitted successfully.");
            window.location.reload();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => console.error('Error!', error.message));
});
