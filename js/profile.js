const emailEl = document.getElementById('email');
const statusEl = document.getElementById('status');
const mensagemEl = document.getElementById('mensagem');
const btnLogout = document.getElementById('btn-logout');

// 🔊 Leitura por voz com fallback
function lerTexto(texto) {
  if ('speechSynthesis' in window) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    speechSynthesis.speak(fala);
  } else {
    console.warn('Leitor de voz não suportado neste navegador.');
  }
}

// 🔐 Carregar dados do perfil
function carregarPerfil() {
  const token = localStorage.getItem('token');

  if (!token) {
    mensagemEl.textContent = 'Você não está logado.';
    lerTexto(mensagemEl.textContent);
    emailEl.textContent = '';
    statusEl.textContent = '';
    return;
  }

  fetch('http://localhost:5000/api/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Resposta inválida da API');
      return res.json();
    })
    .then(data => {
      if (data.email) {
        emailEl.innerHTML = `<strong>Email:</strong> ${data.email}`;
        statusEl.innerHTML = `<strong>Status:</strong> ${data.message || 'Ativo'}`;
        mensagemEl.textContent = '';
        lerTexto(`Perfil carregado com sucesso. Email: ${data.email}`);
      } else {
        throw new Error(data.error || 'Dados incompletos');
      }
    })
    .catch(err => {
      mensagemEl.textContent = err.message || 'Erro ao carregar perfil.';
      emailEl.textContent = '';
      statusEl.textContent = '';
      lerTexto(mensagemEl.textContent);
    });
}

// 🔓 Logout
btnLogout.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
});

// 🚀 Inicialização
document.addEventListener('DOMContentLoaded', carregarPerfil);
