let lightMode = localStorage.getItem('lightMode');

const toggle = document.querySelector('.toggle');

// checking if light mode is on or not
const enableLightMode = () => {
    document.body.classList.add('light-mode');

    toggle.style.transform = 'rotate(180deg)';

    // updating the local storage
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    document.body.classList.remove('light-mode');

    toggle.style.transform = 'rotate(0deg)';

    // updating the local storage
    localStorage.setItem('lightMode', null);
}

if (lightMode === 'enabled') {
    enableLightMode();
}

toggle.addEventListener('click', () => {
    // updating the state of lightmode
    lightMode = localStorage.getItem('lightMode');

    if (lightMode !== 'enabled') {
        enableLightMode();
    }
    else {
        disableLightMode();
    }
});