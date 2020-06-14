const action = document.querySelector('.action');
const eye = document.querySelector('.eye');
let open = false;
let showPass = false;
action.addEventListener('click', () => {
    const check = document.querySelector('#check');
    const times = document.querySelector('#times');
    const arrow = document.querySelector('#arrow');
    const spinner = document.querySelector('#spinner');
    const password = document.getElementById("password");
    const root = document.documentElement;
    arrow.classList.add('hide');
    check.classList.add('hide');
    times.classList.add('hide');
    if (!open) {
        root.style.setProperty('--scale', 'scaleX(1)');
        if (password.value == "viki") {
            action.dataset.content = "Welcome"
            check.classList.remove('hide');
            root.style.setProperty('--color', 'green');
        } else {
            action.dataset.content = "Invalid Password or Username"
            root.style.setProperty('--color', 'red');
            times.classList.remove('hide');
        }
    } else {
        arrow.classList.remove('hide');
        action.dataset.content = "";
        root.style.setProperty('--scale', 'scaleX(0)');
        root.style.setProperty('--color', 'blue');
    }
    open = !open;
});
eye.addEventListener('click', () => {
    const password = document.getElementById("password");
    const openEye = document.getElementById("openEye");
    const closeEye = document.getElementById("closeEye");
    closeEye.classList.toggle('hide');
    openEye.classList.toggle('hide');
    if (!showPass) {
        password.setAttribute('type', 'txt');
    } else {
        password.setAttribute('type', 'password');
    }
    showPass = !showPass;
});