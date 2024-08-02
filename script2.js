document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'MissMila' && password === 'YouAreTheBestest') {
        window.location.href = 'queenmila.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
