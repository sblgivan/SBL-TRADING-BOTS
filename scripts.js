document.addEventListener('DOMContentLoaded', () => {
  // Theme switching
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('theme-dark');
  }
  
  // Loading animation listener
  window.addEventListener('load', () => {
    document.getElementById('loading-listener').style.display = 'none';
  });

  // Login handling logic, form submission and redirect
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phoneNumber = document.getElementById('phone-number').value;
      if (phoneNumber === '0740035058') {
        window.location.href = 'admindata.html';
      } else {
        window.location.href = 'homepage.html';
      }
    });
  }
});
  
