// FIRST query through the contact form
const contactForm = document.querySelector('.contact-form');

// THEN render the elements of the page by ID
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

// listen to the submit button
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Place all of the queried data into an (array)
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };

    // console.log(formData);

    // HTTP Request methods
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
});