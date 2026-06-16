import CardProjeto from './projetoCard';
import ProjetoModal from './projetoModal';
import spoilerImg from '../assets/images/spoiler-api1.png';
import spoilerImg2 from '../assets/images/spoiler-api2.jpeg';
import spoilerImg3 from '../assets/images/spoiler-api3.png';
import spoilerImg4 from '../assets/images/spoiler-api4.png';
import { useState } from 'react';

type Alinhamento = 'left' | 'right';

interface Projeto {
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  imagem: string;
  link: string;
  alinhamento: Alinhamento;
  tecnologias: string[];
}

const projetos: Projeto[] = [
  {
    titulo: 'Desempenho de Vereadores',
    descricao: 'Plataforma que exibe dados sobre a atuação dos vereadores de São José dos Campos, ajudando eleitores a tomarem decisões mais informadas.',
    descricaoCompleta: "Plataforma web que disponibiliza informações detalhadas sobre o desempenho dos vereadores de São José dos Campos no atual mandato. Apresenta dados como presença em sessões, projetos apresentados e votações, de forma clara e acessível para ajudar os eleitores a tomarem decisões mais informadas nas eleições municipais.",
    imagem: spoilerImg,
    link: 'https://github.com/Draco-Imperium/API_FATEC1',
    alinhamento: 'right',
    tecnologias: ['Python', 'Flask', 'HTML5', 'CSS3', 'MySQL', 'Javascript']
  },
  {
    titulo: 'Dashboard de Indicadores',
    descricao: 'Painel com indicadores de crescimento, como número de lojas, usuários e alcance, além de um sistema de captação de usuários para empresas parceiras.',
    descricaoCompleta: "Dashboard de Indicadores de Crescimento para empresas parceiras, exibindo métricas como número de lojas criadas, usuários impactados, patrocinados e distribuição geográfica, além de um sistema para captação e direcionamento de usuários a empresas conforme seu perfil.",
    imagem: spoilerImg2,
    link: 'https://github.com/GeneSys-fatec/API-2DSM',
    alinhamento: 'left',
    tecnologias: ['Typescript', 'Javascript', 'Node.js', 'React', 'HTML5', 'CSS3', 'Sass', 'MySQL']
  },
  {
    titulo: 'Gerenciador de Tarefas',
    descricao: 'Sistema colaborativo de gerenciamento de tarefas com atribuição a usuários, upload de anexos e atualizações em tempo real, desenvolvido para a empresa GSW.',
    descricaoCompleta: 'Sistema colaborativo desenvolvido para a GSW que permite o gerenciamento completo de tarefas com atribuição a membros da equipe, upload de anexos, comentários e atualizações em tempo real. Conta com controle de acesso por perfis e interface intuitiva para acompanhamento do progresso das atividades.',
    imagem: spoilerImg3,
    link: 'https://github.com/GeneSys-fatec/API-3DSM',
    alinhamento: 'right',
    tecnologias: ['TypeScript', 'JavaScript', 'React', 'Java', 'Spring', 'Node.js', 'MongoDB', 'HTML5', 'CSS3']
  },
  {
    titulo: 'Monitoramento Meteorológico IoT',
    descricao: 'Sistema IoT de coleta e visualização de dados climáticos em tempo real via estações de baixo custo, com alertas automáticos, voltado para ONGs e comunidades remotas.',
    descricaoCompleta: 'Sistema completo de monitoramento meteorológico desenvolvido em parceria com a Tecsus, voltado para ONGs e associações de bairro. Coleta dados climáticos como temperatura, vento e chuva via estações físicas de baixo custo, processa via MQTT e exibe em dashboards interativos com alertas automáticos. Deploy automatizado com Docker e AWS.',
    imagem: spoilerImg4,
    link: 'https://gitlab.com/the-devs6675810/api-4-sem-tecsus',
    alinhamento: 'left',
    tecnologias: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS']
  },
];

const Projetos: React.FC = () => {
  const [projetoAberto, setProjetoAberto] = useState<Projeto | null>(null);

  return (
    <div id='projetos' className='scroll-mt-20'>
      <div className="flex items-center w-full px-4">
        <h1 className="text-xl md:text-3xl text-white">
          <span className="text-cyan-300">04</span>.Projetos
        </h1>
        <div className="border-t-1 border-cyan-300 flex-grow ml-3 mt-3" />
      </div>
      {projetos.map((projeto, index) => (
        <CardProjeto
          key={index}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          imagem={projeto.imagem}
          link={projeto.link}
          alinhamento={projeto.alinhamento}
          onAbrir={() => setProjetoAberto(projeto)}
        />
      ))}
      {projetoAberto && (
        <ProjetoModal
          titulo={projetoAberto.titulo}
          descricao={projetoAberto.descricaoCompleta}
          imagem={projetoAberto.imagem}
          link={projetoAberto.link}
          tecnologias={projetoAberto.tecnologias}
          onClose={() => setProjetoAberto(null)}
        />
      )}
    </div>
  );
};

export default Projetos;