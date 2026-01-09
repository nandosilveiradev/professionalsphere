# 🌐 ProfessionalSphere — Wiki Oficial

Bem-vindo à documentação oficial do **ProfessionalSphere**, uma plataforma aberta que conecta
**profissionais PF**, **profissionais PJ** e **empresas** com transparência, reputação real e
foco em entregas comprovadas.

Esta wiki reúne toda a arquitetura, decisões técnicas, convenções e visão do ecossistema.

---

# 📌 Sumário da Wiki

- [Visão Geral](#visão-geral)
- [Roadmap por Fases](#roadmap-por-fases)
- [Documentação Técnica](#documentação-técnica)
- [Estrutura de URLs Públicas](#estrutura-de-urls-públicas)
- [SEO e Indexação](#seo-e-indexação)
- [Sistema de Projetos e Portfólio Vivo](#sistema-de-projetos-e-portfólio-vivo)
- [Avaliações Multilaterais](#avaliações-multilaterais)
- [Expiração e Repostagem Inteligente](#expiração-e-repostagem-inteligente)
- [Links Úteis](#links-úteis)

---

# 📘 Visão Geral

O **ProfessionalSphere** é um ecossistema profissional completo que permite:

✅ Conexão entre PF, PJ e Empresas  
✅ Publicação de vagas e projetos públicos  
✅ Portfólio vivo com histórico real de entregas  
✅ Avaliações multilaterais (empresa, equipe e projeto)  
✅ Reputação baseada em resultados  
✅ Matching avançado por formação, hard skills e soft skills  
✅ SEO forte com páginas públicas indexáveis  

O objetivo é criar um ambiente transparente, meritocrático e baseado em entregas reais.

---

# 🚀 Roadmap por Fases

### **Fase 000 — Visão Geral**
Fundamentos, propósito, público-alvo e arquitetura inicial.

### **Fase 001 — MVP**
- Perfis PF, PJ e Empresas  
- Publicação de vagas  
- Publicação de projetos  
- Matching básico por skills  
- URLs públicas com hash  

### **Fase 002 — Crescimento**
- Portfólio vivo  
- Avaliações multilaterais  
- Reputação e ranking  
- SEO completo  
- Expiração e repostagem inteligente  

### **Fase 003 — Premium**
- Squads  
- Dashboards  
- Métricas avançadas  
- IA para criação de vagas e perfis  

### **Fase 004 — Expansão**
- Internacionalização  
- IA para matching semântico  
- Marketplace de serviços  

---

# 🧠 Documentação Técnica

### **Banco de Dados**
Modelagem completa de:
- usuários  
- projetos  
- vagas  
- avaliações  
- reputação  
- histórico de versões  

# 🔐 Autenticação e Proteção de Rotas

O sistema utiliza **JWT** armazenado em cookies HttpOnly para autenticação.  
- Middleware protege rotas privadas como `/dashboard`.  
- Validação de token ocorre no **server side** usando `jwtVerify`.  
- Logout remove o token e redireciona para `/login`.  

# 🛠️ Infraestrutura

- Containers Docker para aplicação e banco de dados  
- Volumes para persistência  
- Redes internas entre serviços  
- Nginx Proxy Manager com SSL automático  
- Integração com Cloudflare para DNS e proxy  
- Suporte a domínio gratuito `.eu.org`  

# 🚀 CI/CD

Pipeline planejado para:
- Build automático de imagens Docker  
- Testes automatizados  
- Deploy contínuo via GitHub Actions  


### **Autenticação**
- PF, PJ e Empresa como papéis  
- Tokens  
- Permissões  
- Fluxo de onboarding  

### **Sistema de Vagas**
- públicas  
- indexáveis  
- expiração automática  
- repostagem inteligente  

### **Sistema de Projetos**
- portfólio vivo  
- avaliações multilaterais  
- reavaliação após edição  
- hash único  
- SEO  

---

# 🔗 Estrutura de URLs Públicas

O ProfessionalSphere utiliza URLs otimizadas para SEO com hash único:

**Formato:**  
`/<tipo>/<slug>-<hash8>`

  **Exemplos:**

  - `/profissional/nando-silveira-8d42d848`
  - `/projeto/sistema-de-pagamentos-empresa-x-4f9a2c1b`
  - `/vaga/desenvolvedor-react-pleno-7c1e9a44`
  - `/empresa/tech-solutions-91b2c4e1`

  ✅ Hash é fixo  
  ✅ Slug pode mudar sem quebrar a URL  

  ---

  # 🌐 SEO e Indexação

  - Perfis, vagas e projetos são **públicos e indexáveis**  
  - SSR/SSG com Next.js  
  - Metatags dinâmicas  
  - Schema.org para:
  - Person  
  - Organization  
  - JobPosting  
  - CreativeWork  
  - Review  

  Isso cria um ecossistema altamente rastreável e com forte tráfego orgânico.

  ---

  # 🧩 Sistema de Projetos e Portfólio Vivo

  Cada projeto possui:

  ✅ Dono principal  
  ✅ Múltiplos participantes  
  ✅ Empresa associada  
  ✅ Hard skills aplicadas  
  ✅ Soft skills aplicadas  
  ✅ Página pública indexável  
  ✅ Hash único  
  ✅ Histórico de versões  
  ✅ Reavaliação obrigatória após edição  

  Quando um projeto é editado:

  - avaliações são zeradas  
  - projeto entra em “aguardando reavaliação”  
  - empresa e equipe recebem notificação  
  - só volta ao ranking após nova avaliação  

  ---

  # ⭐ Avaliações Multilaterais

  Cada projeto possui **3 sistemas de avaliação**:

  ### ✅ 1. Avaliação da Empresa Contratante
  - qualidade da entrega  
  - comunicação  
  - profissionalismo  
  - resultado final  

  ### ✅ 2. Avaliação dos Participantes
  - colaboração  
  - soft skills  
  - responsabilidade  
  - qualidade técnica  

  ### ✅ 3. Avaliação do Projeto
  - complexidade  
  - impacto  
  - organização  
  - resultado geral  

  Essas avaliações alimentam:

  ✅ reputação do profissional  
  ✅ reputação da empresa  
  ✅ ranking do projeto  
  ✅ matching avançado  

  ---

  # 🔄 Expiração e Repostagem Inteligente

  - Vagas e projetos expiram automaticamente  
  - Criador pode **repostar com 1 clique**  
  - Ideal para substituições rápidas  
  - Mantém o feed limpo e atualizado  
  - Evita vagas antigas e projetos abandonados  

  ---

  # 🔧 Links Úteis

  - **Repositório GitHub**  
  - **Issues**  
  - **Pull Requests**  
  - **Projects (Kanban)**  
  - **Releases**  
  - **Actions (CI/CD)**  
  - **README.md**  
  - **Página de Contribuição**  

  ---

  # ✅ Finalização

  Esta página serve como índice central da documentação do **ProfessionalSphere**, reunindo
  arquitetura, decisões, convenções e visão geral do ecossistema.






