import { useState } from 'react';

interface Experiencia {
    empresa: string;
    cargo: string;
    periodo: string;
    bullets: string[];
}

const experiencias: Experiencia[] = [
    {
        empresa: "Centro Paula Souza",
        cargo: "Professor de Desenvolvimento de Apps e Jogos",
        periodo: "Mai/2026 – Jun/2026",
        bullets: [
            "Ministração de curso introdutório sobre desenvolvimento de aplicativos e jogos para alunos da rede pública estadual.",
            "Planejamento e condução de aulas práticas de 25/05 a 06/06/2026, abordando lógica de programação aplicada a games e apps.",
            "Adaptação de conteúdo técnico para públicos iniciantes sem experiência prévia em programação.",
        ],
    },
    {
        empresa: "FATEC – SJC",
        cargo: "Monitor de Desenvolvimento Web II",
        periodo: "Mar/2026 – Atual",
        bullets: [
            "Colaboração no desenvolvimento de uma aplicação de mural de estágios utilizando práticas de IC/Mini-Projeto.",
            "Responsável pelo estudo e configuração de deploy em servidor próprio, gerenciando ambientes de hospedagem.",
            "Implementação de rotinas de configuração de servidor para otimizar a disponibilidade da aplicação.",
        ],
    },
    {
        empresa: "Marie Curie – USP",
        cargo: "Monitor de Matemática",
        periodo: "Jul/2023 – Dez/2023",
        bullets: [
            "Atuação voluntária em projeto comunitário organizado pelos próprios alunos da EEL/USP, voltado ao cursinho preparatório para vestibulares.",
            "Auxílio didático a estudantes de ensino médio da rede pública, com foco em disciplinas exatas.",
            "Desenvolvimento de habilidades de comunicação, didática e resolução de problemas sob demanda.",
        ],
    },
];

const Experiencias: React.FC = () => {
    const [ativa, setAtiva] = useState(0);

    const exp = experiencias[ativa];

    return (
        <div id="experiencias" className="scroll-mt-12 flex flex-col items-center justify-center w-full mx-auto px-4 pb-30">
            
            <div className="flex items-center w-full max-w-3xl py-10">
                <h1 className="md:text-3xl text-xl text-white whitespace-nowrap">
                    <span className="text-cyan-300">03</span>.Onde Já Trabalhei
                </h1>
                <div className="border-t border-cyan-300 flex-grow ml-3 mt-1" />
            </div>

            <div className="flex flex-col md:flex-row gap-0 w-full max-w-3xl">
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-white/10 shrink-0">
                    {experiencias.map((e, i) => (
                        <button
                            key={i}
                            onClick={() => setAtiva(i)}
                            className={`
                                px-5 py-3 text-left text-sm font-mono whitespace-nowrap transition-all duration-200
                                border-b-2 md:border-b-0 md:border-l-2
                                ${ativa === i
                                    ? 'border-cyan-300 text-cyan-300 bg-cyan-300/5'
                                    : 'border-transparent text-white/40 hover:text-white/70 hover:bg-white/5'
                                }
                            `}
                        >
                            {e.empresa}
                        </button>
                    ))}
                </div>

                <div className="md:pl-10 pt-6 md:pt-0 flex-grow">
                    <h3 className="text-white text-xl font-medium">
                        {exp.cargo}{' '}
                        <span className="text-cyan-300">@ {exp.empresa}</span>
                    </h3>
                    <p className="text-white/40 text-sm font-mono mt-1 mb-6">{exp.periodo}</p>

                    <ul className="flex flex-col gap-4">
                        {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
                                <span className="text-cyan-300 mt-1 flex-shrink-0">▸</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiencias;