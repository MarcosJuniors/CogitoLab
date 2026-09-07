export interface ResearchArea {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: {
      pt: 'Inteligência Artificial para Engenharia de Software',
      en: 'Artificial Intelligence for Software Engineering',
    },
    description: {
      pt: 'Aplicação de inteligência artificial para apoiar atividades de engenharia de software.',
      en: 'Application of artificial intelligence to support software engineering activities.',
    },
  },
  {
    title: {
      pt: 'Qualidade de Software, Dívida Técnica e Refatoração',
      en: 'Software Quality, Technical Debt & Refactoring',
    },
    description: {
      pt: 'Pesquisa sobre qualidade de software, dívida técnica e técnicas de refatoração.',
      en: 'Research on software quality, technical debt and refactoring techniques.',
    },
  },
  {
    title: {
      pt: 'Testes de Software e Confiabilidade',
      en: 'Software Testing & Reliability',
    },
    description: {
      pt: 'Investigação de técnicas de teste, confiabilidade e qualidade de sistemas de software.',
      en: 'Investigation of testing techniques, reliability and software system quality.',
    },
  },
  {
    title: {
      pt: 'Sistemas Configuráveis, Computação Móvel e IoT',
      en: 'Configurable Systems, Mobile & IoT',
    },
    description: {
      pt: 'Estudo de sistemas configuráveis, aplicações móveis e tecnologias de Internet das Coisas.',
      en: 'Study of configurable systems, mobile applications and Internet of Things technologies.',
    },
  },
  {
    title: {
      pt: 'Desenvolvimento Colaborativo e Engenharia de Software Empírica',
      en: 'Collaborative Software Development & Empirical Software Engineering',
    },
    description: {
      pt: 'Pesquisa sobre desenvolvimento colaborativo e métodos empíricos aplicados à engenharia de software.',
      en: 'Research on collaborative development and empirical methods applied to software engineering.',
    },
  },
  {
    title: {
      pt: 'Inovação, Empreendedorismo e Transferência de Tecnologia',
      en: 'Innovation, Entrepreneurship & Technology Transfer',
    },
    description: {
      pt: 'Investigação sobre inovação, empreendedorismo e transferência de tecnologia.',
      en: 'Research on innovation, entrepreneurship and technology transfer.',
    },
  },
];