export interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}
export const testimonials: TestimonialProps[] = [
  {
    name: "Bruno Teixeira",
    role: "Consultor de Segurança do Trabalho",
    avatar: "/about/avatar-1.svg",
    quote:
      "Sinto que cresço todos os dias aqui. A EPSSO valoriza o conhecimento e nos estimula a buscar soluções com base técnica e inteligência estratégica.",
  },
  {
    name: "Carla Menezes",
    role: "Analista de Processos",
    avatar: "/about/avatar-1.svg",
    quote:
      "Na EPSSO, encontrei um propósito real. Cada projeto que desenvolvemos tem impacto direto na saúde e segurança das pessoas. É gratificante saber que fazemos a diferença de forma ética e responsável.",
  },
  {
    name: "Diego Souza",
    role: "Coordenador de Tecnologia",
    avatar: "/about/avatar-1.svg",
    quote:
      "O foco em inovação da EPSSO é inspirador. Trabalhar com soluções digitais que realmente facilitam a vida dos nossos clientes me faz ter orgulho do que entregamos.",
  },
  {
    name: "Letícia Amaral",
    role: "Especialista em Saúde Ocupacional",
    avatar: "/about/avatar-1.svg",
    quote:
      "O cuidado que temos com as pessoas, tanto internamente quanto com nossos clientes, é o que torna a EPSSO única. Aqui, cada decisão é pensada com empatia e compromisso.",
  },
];
