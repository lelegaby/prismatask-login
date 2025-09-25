import { register } from './api.js';
import { mostrarLogin } from './login.js';

document.getElementById('form-register').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email-register').value;
  const senha = document.getElementById('password-register').value;
  const confirmar = document.getElementById('confirm-password').value;
  const mensagemEl = document.getElementById('mensagem');

  if (senha !== confirmar) {
    mensagemEl.textContent = 'As senhas não coincidem.';
    return;
  }

  try {
    const result = await register(email, senha);
    if (result.success) {
      mensagemEl.textContent = 'Usuário criado com sucesso!';
      setTimeout(() => {
        mostrarLogin();
        mensagemEl.textContent = '';
      }, 2000);
    } else {
      mensagemEl.textContent = result.error || 'Erro ao cadastrar.';
    }
  } catch (err) {
    console.error(err);
    mensagemEl.textContent = 'Erro de conexão com o servidor.';
  }
});
