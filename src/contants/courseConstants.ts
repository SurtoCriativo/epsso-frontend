import type { Filter } from "../pages/TrainingPage/_components/CoursesSection";

interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: Filter;
}

export const courseCards: CourseCardProps[] = [
  // Segurança do Trabalho
  {
    id: "nr-01",
    image: "/trainingpage/seguranca-trabalho/disposicoes.webp",
    title: "NR-01 Disposições Gerais",
    subtitle:
      "Conheça os princípios que estruturam todas as normas de segurança.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-05",
    image: "/trainingpage/seguranca-trabalho/comissao-acidentes.webp",
    title: "NR-05 CIPA – Comissão Interna de Prevenção de Acidentes",
    subtitle: "A importância da CIPA para um ambiente de trabalho mais seguro.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-06",
    image: "/trainingpage/seguranca-trabalho/equipamentos-epi.webp",
    title: "NR-06 Equipamento de Proteção Individual - EPI",
    subtitle: "Tudo sobre o uso correto de EPIs.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-10",
    image: "/trainingpage/seguranca-trabalho/seguranca-eletrica.webp",
    title: "NR-10 Segurança em Instalações Elétricas",
    subtitle: "Proteja-se ao lidar com eletricidade no ambiente de trabalho.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-11",
    image: "/trainingpage/seguranca-trabalho/transporte-materiais.webp",
    title: "NR-11 Transporte, Movimentação e Armazenagem de Materiais",
    subtitle: "Regras para manuseio seguro de cargas e equipamentos.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-12",
    image: "/trainingpage/seguranca-trabalho/seguranca-maquinas.webp",
    title: "NR-12 Segurança no Trabalho em Máquinas e Equipamentos",
    subtitle: "Reduza riscos operando máquinas com segurança.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-17",
    image: "/trainingpage/seguranca-trabalho/ergonomia.webp",
    title: "NR-17 Ergonomia",
    subtitle: "Curso completo sobre ergonomia no ambiente de trabalho.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-18",
    image: "/trainingpage/seguranca-trabalho/condicoes-meioambiente.webp",
    title: "NR-18 Condições e Meio Ambiente na Indústria da Construção",
    subtitle: "Segurança e saúde no canteiro de obras.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-20",
    image: "/trainingpage/seguranca-trabalho/inflamaveis.webp",
    title: "NR-20 Inflamáveis e Combustíveis",
    subtitle: "Procedimentos seguros com líquidos inflamáveis.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-23",
    image: "/trainingpage/seguranca-trabalho/protecao-incendios.webp",
    title: "NR-23 Proteção Contra Incêndios",
    subtitle: "Saiba como agir em situações de emergência com fogo.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-33",
    image: "/trainingpage/seguranca-trabalho/espacos-confinados.webp",
    title: "NR-33 Espaços Confinados",
    subtitle: "Saiba como agir em situações de emergência com fogo.",
    category: "Segurança do Trabalho",
  },
  {
    id: "nr-35",
    image: "/trainingpage/seguranca-trabalho/trabalho-altura.webp",
    title: "NR-35 Trabalho em Altura",
    subtitle: "Técnicas e EPIs para trabalhar com segurança em altura.",
    category: "Segurança do Trabalho",
  },
  {
    id: "LOTO",
    image: "/trainingpage/seguranca-trabalho/treinamento-loto.webp",
    title: "Treinamento de LOTO – Bloqueio e Etiquetagem",
    subtitle: "Garanta segurança total na manutenção de máquinas.",
    category: "Segurança do Trabalho",
  },

  // Medicina do Trabalho
  {
    id: "NR-07",
    image: "/trainingpage/medicina-trabalho/controle-medico.webp",
    title: "NR-07 Programa de Controle Médico de Saúde Ocupacional (PCMSO)",
    subtitle: "Capacitação em prevenção e combate a incêndios.",
    category: "Medicina do Trabalho",
  },

  // Ergonomia e Qualidade de Vida
  {
    id: "NR-17",
    image: "/trainingpage/seguranca-trabalho/ergonomia.webp",
    title: "NR-17 Ergonomia",
    subtitle: "Curso completo sobre ergonomia no ambiente de trabalho.",
    category: "Ergonomia e Qualidade de Vida",
  },

  // PARA OUTRAS ABAS - ABAIXO
];
