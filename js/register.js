import { register } from './api.js';

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
      setTimeout(() => window.location.href = 'index.html', 2000);
    } else {
      mensagemEl.textContent = result.error || 'Erro ao cadastrar.';
    }
  } catch (err) {
    mensagemEl.textContent = 'Erro de conexão com o servidor.';
  }
});
