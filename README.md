# Rápido Titan Website

Website moderno para empresa de mudanças e fretes em Sorocaba.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS utilitário via CDN
- **GSAP** - Animações avançadas
- **Font Awesome** - Ícones vetoriais
- **JavaScript** - Interatividade e funcionalidades

## 📱 Recursos

- ✅ Design responsivo (mobile-first)
- ✅ Animações fluidas com GSAP
- ✅ Integração WhatsApp para orçamentos
- ✅ Formulários funcionais
- ✅ Performance otimizada
- ✅ SEO friendly

## 🛠️ Como usar

1. Faça o download dos arquivos
2. Abra index.html no navegador
3. Ou use um servidor local para desenvolvimento:

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .

# Com PHP
php -S localhost:8000
```

## 📂 Estrutura do Projeto

```
rapidotitan-website/
├── index.html              # Página principal
├── servicos.html           # Página de serviços
├── sobre.html              # Sobre a empresa
├── blog.html               # Blog e artigos
├── contato.html            # Formulário de contato
├── codigo.html             # Visualização de código
├── css/                    # Estilos CSS originais
│   ├── style.css
│   └── responsive.css
├── js/                     # Scripts JavaScript
│   ├── main.js
│   └── animations.js
├── images/                 # Imagens e ícones
│   ├── logo.png
│   ├── hero-image.jpg
│   └── ...
├── videos/                 # Arquivos de vídeo
├── checklist_mudanca_residencial_rapido_titan.pdf
├── YOUWARE.md              # Documentação do projeto
└── README.md               # Este arquivo
```

## 🎨 Personalização

### Paleta de Cores
- **Primária**: #00579B (Azul corporativo)
- **Secundária**: #F58634 (Laranja vibrante)
- **Cinza Escuro**: #333333
- **Cinza Médio**: #666666
- **Cinza Claro**: #f4f4f4

### Tipografia
- **Títulos**: Poppins (500, 600, 700)
- **Corpo de texto**: Roboto (400, 700)
- **Código**: JetBrains Mono

### Configuração Tailwind
O projeto usa Tailwind CSS via CDN com configuração personalizada:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#00579B',
                secondary: '#F58634',
                'dark-gray': '#333333',
                'medium-gray': '#666666',
                'light-gray': '#f4f4f4'
            }
        }
    }
}
```

## 🔧 Funcionalidades Principais

### Integração WhatsApp
- Botões de orçamento direcionam para WhatsApp
- Formulário de contato envia dados via WhatsApp
- Mensagens pré-formatadas para facilitar atendimento

### Animações GSAP
- Scroll-triggered animations
- Smooth scrolling
- Interactive hover effects
- Loading animations

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Touch-friendly interactions
- Crossbrowser compatibility

## 📞 Informações da Empresa

**Rápido Titan Mudanças e Fretes**
- WhatsApp/Telefone: (15) 98119-4338
- Email: contato@rapidotitan.com.br
- Localização: Sorocaba/SP
- Facebook: https://www.facebook.com/share/1AYjEiaBQn/
- Instagram: @taniorapidotitan

## 📝 Licença

Este projeto foi desenvolvido exclusivamente para Rápido Titan Mudanças e Fretes.
Todos os direitos reservados © 2025 Rápido Titan.

## 🚀 Deploy

O site pode ser hospedado em qualquer servidor web que suporte arquivos estáticos:
- GitHub Pages
- Netlify
- Vercel
- Servidor tradicional (Apache, Nginx)

## 🔮 Futuras Melhorias

- [ ] Sistema de blog dinâmico
- [ ] Galeria de fotos de mudanças
- [ ] Sistema de agendamento online
- [ ] Chat online
- [ ] Área do cliente

---

**Desenvolvido com ❤️ para Rápido Titan**