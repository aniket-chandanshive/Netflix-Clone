// FAQ Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.plus-icon');

            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                icon.textContent = '+';
            } else {

                document.querySelectorAll('.faq-answer').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.plus-icon').forEach(item => {
                    item.textContent = '+';
                });

                answer.classList.add('active');
                icon.textContent = '×';
            }
        });
    });
});

// Button hover effect
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.get-started, #sign-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

