function aumentarFonte() {
  document.body.style.fontSize = '1.2em';
}

function fonteLegivel() {
  document.body.style.fontFamily = '"OpenDyslexic", Arial, sans-serif';
}

function modoContraste() {
  document.body.classList.toggle('contraste');
}

function mascaraLeitura() {
  if (document.getElementById('mascara-leitura')) return;
  const mascara = document.createElement('div');
  mascara.id = 'mascara-leitura';
  mascara.style.position = 'fixed';
  mascara.style.top = '50%';
  mascara.style.left = '0';
  mascara.style.width = '100%';
  mascara.style.height = '60px';
  mascara.style.backgroundColor = 'rgba(0,0,0,0.6)';
  mascara.style.pointerEvents = 'none';
  mascara.style.transform = 'translateY(-50%)';
  mascara.style.zIndex = '9999';
  document.body.appendChild(mascara);
}

function guiaLeitura() {
  if (document.getElementById('guia-leitura')) return;
  const guia = document.createElement('div');
  guia.id = 'guia-leitura';
  guia.style.position = 'fixed';
  guia.style.top = '0';
  guia.style.left = '0';
  guia.style.width = '100%';
  guia.style.height = '2px';
  guia.style.backgroundColor = 'yellow';
  guia.style.pointerEvents = 'none';
  guia.style.zIndex = '9999';
  document.body.appendChild(guia);
  document.addEventListener('mousemove', e => {
    guia.style.top = `${e.clientY}px`;
  });
}

function ativarLupa() {
  document.body.style.zoom = document.body.style.zoom === '1.2' ? '1' : '1.2';
}

function cursorGrande() {
  document.body.style.cursor = 'url(https://cur.cursors-4u.net/cursors/cur-11/cur1043.cur), auto';
}

function controleVoz() {
  const recognition = new window.SpeechRecognition();
  recognition.onresult = function(event) {
    const comando = event.results[0][0].transcript.toLowerCase();
    if (comando.includes('contraste')) modoContraste();
    if (comando.includes('fonte')) aumentarFonte();
  };
  recognition.start();
}

function ativarVLibras() {
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  document.body.appendChild(script);

  const div = document.createElement('div');
  div.innerHTML = `
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  `;
  document.body.appendChild(div);
}
