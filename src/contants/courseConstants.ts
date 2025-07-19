import type { Filter } from "../pages/TrainingPage/_components/CoursesSection";

interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: Filter;
}

export const courseCards: CourseCardProps[] = [
  // NRs
  {
    id: "nr-17",
    image: "/trainingpage/ergonomia.svg",
    title: "NR-17 Ergonomia",
    subtitle: "Curso completo sobre ergonomia no ambiente de trabalho.",
    category: "NRs",
  },
  {
    id: "nr-35",
    image: "/trainingpage/trabalho-altura.svg",
    title: "NR-35 Trabalho em Altura",
    subtitle: "Treinamento essencial para trabalhos em altura.",
    category: "NRs",
  },
  {
    id: "nr-33",
    image: "/trainingpage/espacos-confinados.svg",
    title: "NR-33 Espaços Confinados",
    subtitle: "Capacitação para trabalhos em espaços confinados.",
    category: "NRs",
  },
  {
    id: "nr-10",
    image: "/trainingpage/seguranca-instalacoes-eletrecidade.svg",
    title: "NR-10 Instalações Elétricas",
    subtitle: "Curso de segurança para serviços com eletricidade.",
    category: "NRs",
  },
  {
    id: "nr-06",
    image: "/trainingpage/equipamento-protecao.svg",
    title: "NR-06 Equipamento de Proteção",
    subtitle: "Tudo sobre o uso correto de EPIs.",
    category: "NRs",
  },
  {
    id: "nr-12",
    image: "/trainingpage/seguranca-maquinas.svg",
    title: "NR-12 Segurança no Trabalho em Máquinas e Equipamentos",
    subtitle: "Segurança em máquinas e equipamentos.",
    category: "NRs",
  },

  // PPCI
  {
    id: "ppci-01",
    image: "/trainingpage/ppci01.jpg",
    title: "PPCI – Combate a Incêndio",
    subtitle: "Capacitação em prevenção e combate a incêndios.",
    category: "PPCI",
  },
  {
    id: "ppci-02",
    image: "/trainingpage/ppci02.jpg",
    title: "PPCI – Primeira Resposta",
    subtitle: "Treinamento para ações de emergência.",
    category: "PPCI",
  },
  // PPR
  {
    id: "ppr-01",
    image: "/trainingpage/ppr01.jpg",
    title: "PPR – Programa de Proteção Respiratória",
    subtitle: "Medidas para ambientes com contaminantes.",
    category: "PPR",
  },
  {
    id: "ppr-02",
    image: "/trainingpage/ppr02.jpg",
    title: "PPR – Equipamentos de Respiração",
    subtitle: "Uso correto de respiradores.",
    category: "PPR",
  },
  // RCP
  {
    id: "rcp-01",
    image: "/trainingpage/rcp01.jpg",
    title: "RCP – Suporte Básico de Vida",
    subtitle: "Treinamento em reanimação cardiopulmonar.",
    category: "RCP",
  },
  {
    id: "rcp-02",
    image: "/trainingpage/rcp02.jpg",
    title: "RCP – Atendimento de Emergência",
    subtitle: "Primeiros socorros em situações críticas.",
    category: "RCP",
  },
];
