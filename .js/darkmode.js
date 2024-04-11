const darkModeButton = document.getElementById('darkModeButton');

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
    darkModeButton.classList.toggle('dark');
    console.log("darkmode function ran")
}

darkModeButton.addEventListener('click', toggleDarkMode);
