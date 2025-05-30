document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.computedStyleMap.display = (answer.computedStyleMap.display === 'block')?

    });
});