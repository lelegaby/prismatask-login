Prismatask – Gerenciador de Tarefas Pessoais
Prismatask é um sistema web de gerenciamento de tarefas pessoais com foco em acessibilidade, usabilidade e autenticação segura. Desenvolvido com HTML, CSS, JavaScript e Supabase, o projeto oferece uma interface intuitiva para login, cadastro e visualização de perfil

├── index.html            - Tela de login com autenticação via e-mail/senha e Google

├── register.html        -  Tela de cadastro com validação e suporte a OAuth

├── profile.html        -  Tela de perfil do usuário autenticado

├── css/
│   ├── estilo.css       -  Estilização principal com design responsivo e variáveis CSS

│   └── acessibilidade.css -  Estilos para recursos inclusivos (contraste, fonte legível, etc.)

├── js/
│   ├── login.js         -  Validação de login e integração com Supabase

│   ├── register.js       - Validação de cadastro e integração com Supabase

│   ├── profile.js       -  Exibição de dados do usuário e logout

│   ├── api.js           -  Funções centralizadas de autenticação via Supabase

│   └── acessibilidade.js - Controle do painel de acessibilidade e ajustes visuais

└── assets/              - Imagens e ícones utilizados na interface/                 


Como executar localmente

Clone o repositório:
bash
git clone https://github.com/seu-usuario/prismatask.git

cd prismatask

Abra o projeto no VS Code ou outro editor.

Configure o Supabase:
Crie um projeto em https://supabase.com
Vá em Project Settings → API e copie:
SUPABASE_URL
SUPABASE_ANON_KEY

No index.html, substitua:
js

window.SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';

window.SUPABASE_ANON_KEY = 'SUA_ANON_KEY_PUBLICA';

Execute o projeto:
Basta abrir index.html em seu navegador.

Para testes locais com OAuth (Google), use um servidor local como o Live Server do VS Code.

Autenticação
Login com e-mail e senha
Cadastro com validação em tempo real
Login e cadastro com Google (OAuth via Supabase)
Logout seguro com redirecionamento

 Acessibilidade
Navegação por teclado
Alto contraste automático
Máscara de leitura, lupa, guia de leitura
Fonte legível (OpenDyslexic)
Controle por voz e integração com VLibras

Requisitos

Navegador moderno (Chrome, Firefox, Edge)

Conexão com Supabase

Para OAuth: conta Google e configuração de redirect URI no Supabase

 Licença
Este projeto é de autoria própria e pode ser utilizado para fins acadêmicos e educacionais. Para outros usos, entre em contato.
