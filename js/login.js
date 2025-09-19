import { login } from './api.js';

document.getElementById('form-login').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email-login').value;
  const senha = document.getElementById('password-login').value;

  try {
    const result = await login(email, senha);
    if (result.success) {
      window.location.href = 'profile.html';
    } else {
      alert('Login inválido!');
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao conectar com o servidor.');
  }
});
function mostrarCadastro() {
  const loginForm = document.getElementById('form-login');
  const registerForm = document.getElementById('form-register');

  loginForm.classList.remove('active');
  loginForm.classList.add('hidden');

  registerForm.classList.remove('hidden');
  registerForm.classList.add('active');
}

function mostrarLogin() {
  const loginForm = document.getElementById('form-login');
  const registerForm = document.getElementById('form-register');

  registerForm.classList.remove('active');
  registerForm.classList.add('hidden');

  loginForm.classList.remove('hidden');
  loginForm.classList.add('active');
}

function mostrarCadastro() {
  document.getElementById('form-login').classList.remove('active');
  document.getElementById('form-login').classList.add('hidden');
  document.getElementById('form-register').classList.remove('hidden');
  document.getElementById('form-register').classList.add('active');
}

function mostrarLogin() {
  document.getElementById('form-register').classList.remove('active');
  document.getElementById('form-register').classList.add('hidden');
  document.getElementById('form-login').classList.remove('hidden');
  document.getElementById('form-login').classList.add('active');
}
