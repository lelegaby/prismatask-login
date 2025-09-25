
import { login as apiLogin } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const emailInput = document.getElementById('email-login');
  const passInput = document.getElementById('password-login');
  const rememberCheckbox = document.getElementById('remember-me');


  const emailSalvo = localStorage.getItem('emailSalvo');
  if (emailSalvo) {
    emailInput.value = emailSalvo;
    rememberCheckbox.checked = true;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const senha = passInput.value;

    if (!email || !senha) {
      alert('Preencha e-mail e senha.');
      return;
    }

    try {
      const result = await apiLogin(email, senha);

      if (result.success) {
        if (rememberCheckbox.checked) {
          localStorage.setItem('emailSalvo', email);
        } else {
          localStorage.removeItem('emailSalvo');
        }
        
        window.location.href = 'profile.html';
      } else {
        alert(result.error || 'Login inválido!');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Erro ao conectar com o servidor.');
    }
  });
});
