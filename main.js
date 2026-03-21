function showSurvey(question) {
    const response = prompt(question);
    if (response) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index.html';
    }
}

document.getElementById('nav-contact').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('nav-about').addEventListener('click', function() {
    window.location.href = 'last.html';
});

document.getElementById('nav-email').addEventListener('click', function() {
    window.location.href = 'protein.html';
});