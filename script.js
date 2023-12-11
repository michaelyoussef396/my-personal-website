document.addEventListener("DOMContentLoaded", function () {
    //switch color btn
    const colorSwitchBtn = document.getElementById('colorSwitchBtn');
    colorSwitchBtn.addEventListener('click', function () {
        document.body.classList.toggle('blue');
    });

    ///gtreeting message/btn
    const greetBtn = document.getElementById('greetBtn');
    const greetingMessage = document.getElementById('greetingMessage');

    greetBtn.addEventListener('click', function () {
        const userName = prompt('What is your name?');
        if (userName) {
            const message = `Hello ${userName}, nice to meet you and thrilled you're here!`;
            greetingMessage.textContent = message;
            greetingMessage.style.display = 'block';
            greetBtn.style.display = 'none';
            greetingMessage.style.background = 'aqua';
            greetingMessage.style.margin = '2rem 0';
            greetingMessage.style.padding = '1rem 2rem';
            greetingMessage.style.fontSize = '1.6rem';
            greetingMessage.style.width = 'auto';
            greetingMessage.style.borderRadius = '1.3rem';
            greetingMessage.style.color = '#000';
            greetingMessage.style.fontWeight = '600';
        }
    });

    //contact form
    const contactForm = document.getElementById('contact-Form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(email);
        const isValidPhone = phone.length >= 8;

        if (name && isValidEmail && isValidPhone && message) {
            alert(`Thank you, ${name}! I'll get in contact with you soon.`);
            contactForm.reset();
        }
    });

});