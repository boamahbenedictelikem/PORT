const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.getElementById('year');
const contactForm = document.querySelector('#contact-form');

if (year) {
    year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.querySelector('.sr-only').textContent = 'Open menu';
        });
    });
}

if (contactForm) {
    const fields = ['name', 'email', 'message'];

    const setFieldError = (field, message) => {
        const input = contactForm.elements[field];
        const row = input.closest('.form-row');
        row.classList.toggle('has-error', Boolean(message));
        document.querySelector(`#${field}-error`).textContent = message;
        input.setAttribute('aria-invalid', String(Boolean(message)));
    };

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const email = String(formData.get('email')).trim();
        const errors = {
            name: String(formData.get('name')).trim() ? '' : 'Please enter your name.',
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please enter a valid email address.',
            message: String(formData.get('message')).trim().length >= 10 ? '' : 'Please share at least 10 characters.'
        };

        fields.forEach((field) => setFieldError(field, errors[field]));
        const status = document.querySelector('#form-status');
        status.className = 'form-status';

        if (Object.values(errors).some(Boolean)) {
            status.textContent = 'Please check the highlighted fields.';
            status.classList.add('error');
            contactForm.querySelector('.has-error input, .has-error textarea')?.focus();
            return;
        }

        const submitButton = contactForm.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');
        status.textContent = 'Sending your message...';

        window.setTimeout(() => {
            submitButton.disabled = false;
            submitButton.classList.remove('is-loading');
            status.textContent = 'Thanks, your message is ready to send. I will be in touch soon.';
            status.classList.add('success');
            contactForm.reset();
        }, 700);
    });
}
