# Cogito Lab

Website institucional do **Cogito Lab**, desenvolvido como parte de um desafio técnico.

O projeto apresenta uma versão **MVP (Minimum Viable Product)** do site, priorizando as funcionalidades e estruturas principais dentro do prazo disponível.

---

## Status do projeto

**MVP desenvolvido.**

Devido ao tempo limitado para realização do desafio, não foi possível implementar todas as funcionalidades previstas no escopo original.

Durante o desenvolvimento, priorizei a criação de uma base funcional, responsiva e organizada, que permita a continuidade do projeto posteriormente.

---

# Tecnologias utilizadas

* Angular
* TypeScript
* HTML5
* CSS3
* Vitest
* Git
* GitHub

---

# Como o projeto foi desenvolvido

O projeto foi desenvolvido utilizando **Angular com TypeScript**, utilizando uma arquitetura baseada em componentes.

A aplicação foi dividida em:

```text
src/app/
├── core/
│   └── services/
│       └── idioma.service.ts
│
├── pages/
│   ├── inicio/
│   ├── pesquisa/
│   ├── projetos/
│   ├── pessoas/
│   ├── publicacoes/
│   └── participar/
│
└── shared/
    └── components/
        ├── cabecalho/
        └── rodape/
```

A organização foi feita dessa maneira para separar responsabilidades:

* `pages`: páginas e funcionalidades principais.
* `shared`: componentes compartilhados pela aplicação.
* `core`: serviços e funcionalidades utilizadas por diferentes partes do sistema.

---

# Funcionalidades implementadas

## Página inicial

Foi implementada uma seção inicial contendo:

* Identidade do Cogito Lab.
* Hero institucional.
* Texto de apresentação.
* Imagem relacionada ao ambiente de pesquisa.
* Botão para acessar as áreas de pesquisa.
* Layout responsivo.

---

## Áreas de pesquisa

Foram implementadas as seis áreas de pesquisa definidas no desafio:

1. Artificial Intelligence for Software Engineering
2. Software Quality, Technical Debt & Refactoring
3. Software Testing & Reliability
4. Configurable Systems, Mobile & IoT
5. Collaborative Software Development & Empirical Software Engineering
6. Innovation, Entrepreneurship & Technology Transfer

Os dados foram separados dos arquivos HTML para facilitar manutenção e futuras alterações.

---

## Projetos

Foi criada uma seção de projetos contendo:

* Cinco projetos.
* Título.
* Descrição.
* Informação de financiamento.
* Imagem ilustrativa.
* Cards responsivos.

---

## Pessoas

Foi criada uma seção para apresentação dos integrantes do laboratório contendo:

* Nome.
* Função.
* Foto.
* Cards responsivos.

---

## Cabeçalho

Foi desenvolvido um cabeçalho institucional contendo:

* Logo.
* Nome do laboratório.
* Navegação.
* Seleção de idioma.
* Menu mobile.
* Adaptação para desktop, tablet e mobile.

---

## Rodapé

Foi desenvolvido um rodapé institucional contendo:

* Identidade do laboratório.
* Navegação.
* Informações institucionais.
* Copyright.
* Layout responsivo.

---

# Sistema de idiomas

Foi implementado um sistema inicial de internacionalização utilizando um serviço próprio em Angular.

Arquivo:

```text
src/app/core/services/idioma.service.ts
```

O serviço utiliza `signal` para armazenar o idioma atual:

```typescript
idiomaAtual = signal<'pt' | 'en'>('pt');
```

Os idiomas disponíveis são:

```text
PT-BR
EN
```

A troca é realizada através do método:

```typescript
alternarIdioma(): void {
  this.idiomaAtual.update((idioma) =>
    idioma === 'pt' ? 'en' : 'pt'
  );
}
```

Os componentes que utilizam esse estado conseguem atualizar seu conteúdo quando o idioma é alterado.

Para os dados que possuem tradução, foi utilizada uma estrutura contendo português e inglês:

```typescript
title: {
  pt: 'Inteligência Artificial para Engenharia de Software',
  en: 'Artificial Intelligence for Software Engineering',
}
```

Dessa forma, a mesma estrutura de dados pode fornecer conteúdo para os dois idiomas.

---

# Responsividade

A interface foi desenvolvida considerando três principais faixas:

```text
Desktop: >= 1024px
Tablet:  768px – 1023px
Mobile:  < 768px
```

Foram utilizados recursos de CSS como:

* CSS Grid.
* Flexbox.
* Media Queries.
* Layout mobile-first.
* Ajustes de espaçamento e tipografia.
* Adaptação de navegação.

---

# Componentização

A aplicação utiliza componentes independentes para separar responsabilidades.

Exemplo:

```text
Cabecalho
Destaque
Pesquisa
Projetos
Pessoas
Rodape
```

Isso permite que cada parte da interface tenha seus próprios:

```text
.ts
.html
.css
.spec.ts
```

A componentização facilita a manutenção e permite evoluir cada parte da aplicação separadamente.

---

# Recursos do Angular utilizados

Durante o desenvolvimento foram utilizados conceitos e recursos do Angular, incluindo:

* Standalone Components.
* Componentes.
* Services.
* Dependency Injection.
* `inject()`.
* Signals.
* Data Binding.
* Event Binding.
* Interpolação.
* `@if`.
* `@for`.
* Organização por páginas.
* Separação entre dados e apresentação.

---

# Testes

O projeto utiliza **Vitest** para testes automatizados.

Os arquivos de teste são criados junto aos componentes e serviços:

```text
*.spec.ts
```

Foi utilizada a estrutura de testes fornecida pelo Angular para validar o funcionamento básico dos componentes e serviços.

A cobertura pode ser ampliada posteriormente conforme novas funcionalidades forem implementadas.

---

# Controle de versão

O desenvolvimento foi realizado utilizando Git e GitHub.

Foram utilizados commits separados por funcionalidade, buscando manter um histórico que represente a evolução do projeto.

Exemplos:

```text
feat: estrutura hero da página inicial
feat: implementa cabecalho responsivo
feat: implementa areas de pesquisa
feat: implementa secao de projetos de pesquisa
feat: implementa secao de pessoas
feat: implementa rodape institucional
feat: adiciona suporte a idiomas pt-br e en
```

---

# Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como **ferramenta de apoio durante o desenvolvimento**, principalmente para auxiliar no aprendizado, solução de problemas e revisão da implementação.

A IA foi utilizada para:

### Estruturação

* Auxiliar na definição da estrutura inicial do projeto Angular.
* Discutir a organização de pastas e componentes.
* Avaliar decisões de arquitetura para o MVP.

### Desenvolvimento

* Explicar conceitos de Angular e TypeScript.
* Auxiliar na implementação de componentes.
* Auxiliar na criação do serviço de idiomas.
* Sugerir formas de implementar responsividade.
* Auxiliar na identificação e correção de erros de compilação.
* Explicar mensagens de erro do Angular.

### CSS e interface

* Auxiliar na criação e revisão de estilos CSS.
* Sugerir layouts responsivos para desktop, tablet e mobile.
* Auxiliar na organização visual das seções.

### Debugging

A IA também foi utilizada como apoio para analisar erros encontrados durante o desenvolvimento, como:

* Erros de importação.
* Erros de componentes não reconhecidos.
* Problemas de tipagem.
* Problemas de binding.
* Problemas relacionados à estrutura dos arquivos.

### Aprendizado

Além de gerar sugestões, a IA foi utilizada principalmente para **explicar o funcionamento do código**, permitindo compreender conceitos como:

* Components.
* Services.
* Signals.
* Dependency Injection.
* Data Binding.
* Componentização.
* Organização de projetos Angular.

A utilização da IA não substituiu a execução, testes e validação do código no ambiente local. As alterações foram aplicadas e verificadas durante o desenvolvimento.

---

# Limitações do MVP

Devido ao prazo disponível, algumas funcionalidades previstas no escopo original não foram concluídas.

Entre elas:

* Conteúdo institucional completo.
* Informações completas dos pesquisadores.
* Publicações.
* Notícias e atividades.
* Dados completos dos projetos.
* Formulário completo de participação.
* Informações completas de parceiros e financiadores.
* Cobertura de testes mais ampla.
* Internacionalização completa de todas as páginas.
* Deploy final.
* Alguns refinamentos de acessibilidade.

Essas funcionalidades podem ser implementadas posteriormente utilizando a estrutura existente.

---

# Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/MarcosJuniors/CogitoLab.git
```

Entre na pasta:

```bash
cd CogitoLab
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ng serve
```

Para executar os testes:

```bash
npm test
```

---

# Próximos passos

Com mais tempo disponível, o projeto poderia evoluir para:

1. Finalização das páginas restantes.
2. Completar a tradução PT-BR/EN.
3. Adicionar informações completas dos pesquisadores.
4. Implementar publicações e notícias.
5. Ampliar os testes automatizados.
6. Melhorar acessibilidade.
7. Refinar a responsividade.
8. Configurar o deploy.
9. Integrar uma API para os dados do laboratório.

---

# Considerações finais

O objetivo principal desta entrega foi construir um **MVP funcional do Cogito Lab**, priorizando organização, componentização, responsividade e uma base preparada para futuras evoluções.

Mesmo com as limitações de tempo, foram aplicados conceitos importantes de desenvolvimento frontend com Angular e TypeScript.

A utilização de Inteligência Artificial ocorreu como ferramenta de apoio para **aprendizado, desenvolvimento, debugging e tomada de decisões técnicas**, mantendo a validação e execução do projeto no ambiente de desenvolvimento.

O projeto permanece estruturado para que as funcionalidades não implementadas possam ser adicionadas de maneira incremental.