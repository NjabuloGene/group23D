// Basic signup form handler

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Account created successfully!');
    });
  }
});