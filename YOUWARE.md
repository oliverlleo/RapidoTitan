# Rapido Titan Website

Este é o código-fonte do website da Rapido Titan, uma empresa de mudanças e fretes em Sorocaba.

## Estrutura do Projeto

```
src/
  ├── css/                    # Arquivos CSS
  │   ├── responsive.css      # Estilos responsivos
  │   └── style.css           # Estilos principais 
  ├── images/                 # Imagens e ícones
  ├── js/                     # Arquivos JavaScript
  ├── videos/                 # Arquivos de vídeo
  ├── blog-*.html             # Páginas individuais de blog
  ├── servico-*.html          # Páginas individuais de serviços
  ├── blog.html               # Página principal do blog
  ├── codigo.html             # Página de visualização de código
  ├── contato.html            # Página de contato
  ├── index.html              # Página inicial
  ├── servicos.html           # Página de serviços
  └── sobre.html              # Página sobre nós
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos personalizados
- **Tailwind CSS** - Framework de utilidades CSS via CDN
- **JavaScript** - Funcionalidades interativas
- **GSAP** - Biblioteca para animações avançadas
- **Font Awesome** - Biblioteca de ícones

## Recursos de Design

### Cores da Marca
- **Azul Primário**: `#00579B`
- **Laranja Secundário**: `#F58634`
- **Cinza Escuro**: `#333333`
- **Cinza Médio**: `#666666`
- **Cinza Claro**: `#f4f4f4`

### Tipografia
- **Títulos**: Poppins (500, 600, 700)
- **Corpo de texto**: Roboto (400, 700)

## Recursos de Código

### Estilos CSS
O projeto utiliza uma combinação de estilos CSS personalizados (no diretório `css/`) e utilitários do Tailwind CSS (via CDN). Os estilos seguem uma estrutura modular com variáveis CSS para cores, fontes e transições.

### Animações
As animações são gerenciadas principalmente através da biblioteca GSAP (GreenSock Animation Platform), que inclui:
- Animações de entrada para elementos
- Animações baseadas em scroll
- Efeitos interativos em botões
- Contadores animados
- Efeitos paralaxe

### Responsividade
O design é completamente responsivo, adaptando-se a diferentes tamanhos de tela. Os breakpoints principais estão definidos em `css/responsive.css`.

## Funcionalidades Especiais

### Página de Código
A página `codigo.html` permite visualizar trechos de código do site e oferece um botão simulado para download do código completo em formato ZIP.

### Ícones
O site utiliza a biblioteca Font Awesome para ícones, substituindo imagens estáticas por ícones vetoriais escaláveis.

## Notas para Desenvolvimento

1. A página inicial (`index.html`) utiliza Tailwind CSS e GSAP diretamente, enquanto as páginas internas utilizam os arquivos CSS no diretório `css/`.

2. Para manter a consistência visual ao fazer alterações:
   - Siga a paleta de cores definida nas variáveis CSS
   - Mantenha a hierarquia tipográfica e espaçamentos consistentes
   - Preserve os estilos de animação para uma experiência unificada

3. Ao adicionar novos recursos:
   - Mantenha a mesma estrutura de arquivos
   - Para novas páginas de blog, siga o padrão `blog-*.html`
   - Para novas páginas de serviço, siga o padrão `servico-*.html`