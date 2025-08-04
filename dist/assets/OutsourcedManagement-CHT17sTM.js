import{j as e,m as v,r as t}from"./index-BQlWQbG5.js";import{Q as w}from"./QuoteSection-Cxx-gz_E.js";import{C}from"./ContactForm-xJaPtrHf.js";import{T as N,A as d}from"./Tooltip-se4R3vKI.js";import{u as E}from"./useHtmlMetaData-Dyfvlpiq.js";import"./useEmail-PekuvUIJ.js";import"./useContactForm-Bvgy2Pg6.js";import"./formatters-DEC8jTlI.js";function T(){return e.jsx(v.section,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:`\r
        w-full bg-white\r
        py-6 md:py-[120px]\r
        px-4 md:px-0\r
      `,children:e.jsxs("div",{className:`\r
          max-w-[343px] md:max-w-[1128px] mx-auto\r
          flex flex-col md:grid md:grid-cols-2\r
          gap-8 md:gap-12 items-center\r
        `,children:[e.jsx("div",{className:`\r
            w-full max-w-[540px]\r
            mb-6 md:mb-0\r
            pt-[76px] md:pt-0\r
            mx-auto\r
            order-first md:order-last\r
          `,children:e.jsx("div",{className:"overflow-hidden rounded-r-[40px]",children:e.jsx("img",{src:"/services-pages/gestao-terceirizados.webp",alt:"Médica segurando prancheta",width:540,height:421,className:"object-cover w-full h-auto",fetchPriority:"high",decoding:"async"})})}),e.jsxs("div",{className:"order-last md:order-first",children:[e.jsx("h2",{className:`\r
              text-center \r
              md:text-left\r
              text-[32px]\r
              font-medium text-brand-450\r
              mb-6\r
            `,children:"Gestão de Serviços Terceirizados"}),e.jsx("p",{className:`\r
            text-left\r
              text-base\r
              text-neutral-700 leading-relaxed\r
              mb-4 md:mb-6\r
            `,children:"Contratar serviços de outsourcing e terceirização é uma estratégia eficiente que reduz custos, garante conformidade legal e permite que sua empresa concentre esforços no foco principal da empresa - enquanto a segurança e medicina do trabalho ficam por conta da EPSSO."}),e.jsx("p",{className:`\r
              text-left text-base\r
              text-neutral-700 leading-relaxed\r
              mb-4 md:mb-6\r
            `,children:"Nossa equipe é formada por médicos, enfermeiros, psicólogos, fisioterapeutas, engenheiros e técnicos em segurança do trabalho que garantem uma gestão especializada, promovendo ambientes mais seguros, reduzindo riscos e garantindo o cumprimento das normas regulamentadoras. Assim, sua empresa otimiza recursos, aumenta a eficiência interna e promove o bem-estar dos colaboradores com uma equipe experiente."}),e.jsx("p",{className:`\r
              text-left text-base\r
              text-neutral-700 leading-relaxed\r
            `,children:"Com vasta experiência no mercado, a EPSSO oferece soluções personalizadas para selecionar, treinar e gerenciar o profissional que a sua empresa precisa."})]})]})})}const O=[{heading:"Para seus Colaboradores",content:`Gestão de Ambulatório Médico /Ambulatório de Enfermagem (NR 4 Portaria 3.214/ 78)
   • Equipe de profissionais de Enfermagem, Médicos Examinadores, Médicos do Trabalho com certificação eSocial
   • Integração da Política de SST com Medicina Assistencial / Gestão Completa do PCMSO
   • Software para Gestão eSocial de Saúde e Segurança do Trabalho | Emissão de Relatórios Gerenciais e Operacionais
   • Realização de Exames Clínicos e Complementares in company
   • Projeto e instalação de mobiliário e equipamentos / Gestão de Insumos e medicamentos
`},{heading:"Para seus Clientes",content:`Gestão de Ambulatório para Atendimento ao Público
   • Montagem e Administração de Ambulatório de Enfermagem para grandes Lojas, Instituições Educacionais, Shopping Centers, Supermercados, etc
   • Equipe de profissionais Técnicos, Bombeiros, Enfermeiros, Médicos, Fisioterapeutas, Psicólogos, Nutricionistas, entre outros
   • Projeto e instalação de mobiliário e equipamentos / veículos de resgate
   • Implantação de Software para Controle Estatístico de Atendimento / Relatório Gerenciais e Operacionais
`},{heading:"Terceirização de Técnicos em Segurança do Trabalho",content:`   • Oferecimento de Profissionais com experiência e certificação de acordo com necessidades da sua empresa
   • Suporte full time do time EPSSO de Saúde e Segurança do Trabalho
   • Gestão completa de todos os serviços de Saúde e Segurança do Trabalho
   • Software para Gestão de eSocial de Saúde e Segurança do Trabalho
`}],z=[{id:1,top:"67%",left:"18%",text:"Terceirização de Técnicos em Segurança do Trabalho",position:"right",accordionIndex:2},{id:2,top:"38%",left:"43%",text:"Para seus Clientes",position:"right",accordionIndex:1},{id:3,top:"52%",left:"75%",text:"Para seus Colaboradores",position:"right",accordionIndex:0}];function k(){const[p,l]=t.useState(null),[f,g]=t.useState(null),h=t.useRef(!1);E({title:"EPSSO | Gestão de Terceirizados",metaDescription:"Contratar serviços de outsourcing e terceirização é uma estratégia eficiente que reduz custos, garante conformidade legal e permite que sua empresa concentre esforços no foco principal da empresa - enquanto a segurança e medicina do trabalho ficam por conta da EPSSO."});const[s,m]=t.useState(null),i=t.useRef([]),b=t.useCallback(a=>{h.current=!0,g(null),l(a)},[]),S=t.useCallback(()=>{l(null)},[]),j=t.useCallback(a=>{if(a.accordionIndex!==void 0){const o=i.current[a.accordionIndex];if(o){const r=o.querySelector('[role="button"]'),u=s===a.accordionIndex;if(s!==null&&s!==a.accordionIndex){const n=i.current[s];if(n){const c=n.querySelector('[role="button"]');c&&c.getAttribute("aria-expanded")==="true"&&c.click()}}!u&&r&&r.click(),setTimeout(()=>{const n=i.current[a.accordionIndex];if(n){const x=n.getBoundingClientRect().top+window.pageYOffset+-97;window.scrollTo({top:x,behavior:"smooth"})}},u?0:300)}}},[s]);return e.jsxs("main",{className:"px-0 w-full mx-auto",children:[e.jsxs(w,{children:[e.jsx("p",{className:"text-brand-400 font-medium mx-auto w-[372px] sm:w-[723px] text-[16px] md:text-[32px]",children:"Com soluções em outsourcing e terceirização,"}),e.jsx("p",{className:"text-brand-400 font-medium mx-auto w-[372px] sm:w-[723px] text-[16px] md:text-[32px]",children:"sua empresa ganha em eficiência e economia"})]}),e.jsx(T,{}),e.jsxs("section",{className:"relative w-full max-w-[1128px] mx-auto",children:[e.jsx("h1",{className:"mx-auto max-w-[343px] md:pt-0 md:max-w-[1128px] text-center text-[20px] pt-4 md:text-left md:text-[24px] font-medium text-2xl text-green-accents-400",children:"Conheça nossas soluções em Gestão de Serviços Terceirizados:"}),e.jsx("p",{className:"text-center md:text-left text-[16px] md:text-[18px] text-neutral-700 pb-[40px]",children:"Veja todas nossas soluções abaixo da imagem."}),e.jsx("img",{src:"/interactive/interactive-outsourced.webp",alt:"Industrial Safety Overview",className:"w-full max-h-auto object-cover rounded-3xl pb-[80px]"}),z.map(a=>e.jsx("div",{className:"hidden md:block md:absolute",style:{top:a.top,left:a.left},onMouseEnter:()=>b(a.id),onMouseLeave:S,children:e.jsx(N,{isVisible:p===a.id||f===a.id,text:a.text,position:a.position,children:e.jsx("button",{onClick:()=>j(a),className:"cursor-pointer w-6 h-6 border-brand-300 border-2 bg-green-accents-400 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"})})},a.id))]}),e.jsx("div",{className:"w-full max-w-[1128px] pb-[80px] mx-auto px-4 sm:px-0",children:e.jsx("div",{className:"flex flex-col gap-6",children:O.map((a,o)=>e.jsx("div",{ref:r=>{i.current[o]=r},children:e.jsxs(d,{defaultOpen:!1,onToggle:r=>{r?m(o):s===o&&m(null)},children:[e.jsx(d.Heading,{className:"max-h-[36px] sm:max-h-[40px]",index:o+1,children:e.jsx("h3",{className:"flex-1 font-medium sm:font-semibold",children:a.heading})}),e.jsx(d.Content,{className:"whitespace-pre-line",children:a.content})]})},o))})}),e.jsx(C,{preSelectedSolution:"gestao-de-terceirizados",pageSource:"Gestão de Terceirizados",successMessage:"Obrigado! Um especialista em Gestão de Terceirizados entrará em contato."})]})}export{k as default};
