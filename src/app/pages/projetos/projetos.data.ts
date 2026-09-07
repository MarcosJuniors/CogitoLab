export interface Project {
  title: string;
  description: string;
  funding: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Inteligência Artificial Aplicada à Engenharia de Software',
    description:
      'Investigação de técnicas de inteligência artificial para apoiar atividades de desenvolvimento, manutenção e evolução de software.',
    funding: 'CNPq',
    image: '/images/projetos/projeto-1.jpg',
  },
  {
    title: 'Qualidade de Software e Redução da Dívida Técnica',
    description:
      'Estudo de estratégias para identificar, analisar e reduzir problemas relacionados à qualidade e à dívida técnica em sistemas de software.',
    funding: 'FAPEMIG',
    image: '/images/projetos/projeto-2.jpg',
  },
  {
    title: 'Testes de Software e Confiabilidade de Sistemas',
    description:
      'Pesquisa de métodos e técnicas para melhorar a cobertura de testes, a confiabilidade e a qualidade de sistemas de software.',
    funding: 'CNPq',
    image: '/images/projetos/projeto-3.jpg',
  },
  {
    title: 'Sistemas Configuráveis, Computação Móvel e IoT',
    description:
      'Investigação de soluções para sistemas configuráveis, aplicações móveis e dispositivos conectados à Internet das Coisas.',
    funding: 'FAPEMIG',
    image: '/images/projetos/projeto-4.jpg',
  },
  {
    title: 'Inovação e Transferência de Tecnologia',
    description:
      'Estudo de estratégias para transformar resultados de pesquisa em soluções inovadoras e promover a transferência de tecnologia para a sociedade.',
    funding: 'CNPq',
    image: '/images/projetos/projeto-5.jpg',
  },
];