function showSurvey(question) {
    const response = prompt(question);
    if (response) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('nav-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    const aboutBtn = document.getElementById('nav-about');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            window.location.href = 'last.html';
        });
    }

    const emailBtn = document.getElementById('nav-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            window.location.href = 'protein.html';
        });
    }

    const homeBtn = document.getElementById('nav-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});