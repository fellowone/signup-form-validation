// Form validation logic
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

        // If validation fails, prevent submission
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Add Bootstrap's validation styling
        form.classList.add('was-validated');
    }, false);
});
