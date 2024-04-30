const darkModeButton = document.getElementById('darkModeButton');

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
    darkModeButton.classList.toggle('dark');
    
    inputs = document.querySelectorAll('.input')
    for (const input of inputs) {
        input.classList.toggle('dark');
    }
}

darkModeButton.addEventListener('click', toggleDarkMode);
