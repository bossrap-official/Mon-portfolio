document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (name === '' || email === '' || msg === '') {
        message.textContent = 'Veuillez remplir tous les champs.';
        message.style.color = 'red';
      } else {
        message.textContent = 'Message envoyé avec succès !';
        message.style.color = 'green';
        form.reset();
      }
    });
  }
});
