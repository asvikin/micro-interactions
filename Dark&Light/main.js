const checkbox = document.querySelector("#toggle");
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
})