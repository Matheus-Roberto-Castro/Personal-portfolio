const Habilidades: React.FC = () => {
    const frontend = [
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ];

    const backend = [
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    ];

    const bancos = [
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "Cassandra", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original-wordmark.svg" },
    ];

    const devops = [
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
        { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    ];

    const softSkills = [
        {
            icon: "ti-users",
            titulo: "Trabalho em equipe",
            descricao: "Desenvolvida em projetos reais integradores na Fatec, com times multidisciplinares e metodologia ágil",
        },
        {
            icon: "ti-message-circle",
            titulo: "Comunicação",
            descricao: "Aprimorada ministrando aulas de dev de apps e jogos pelo Centro Paula Souza e em monitorias",
        },
        {
            icon: "ti-puzzle",
            titulo: "Resolução de problemas",
            descricao: "Exercitada na entrega de soluções reais para empresas parceiras ao longo dos semestres na Fatec",
        },
        {
            icon: "ti-rocket",
            titulo: "Proatividade",
            descricao: "Evidenciada em projetos pessoais, jogos autorais e estudo contínuo fora do ambiente acadêmico",
        },
    ];

    const estudando = [
        { icon: "ti-shield-lock", nome: "Cibersegurança" },
        { icon: "ti-brain", nome: "Ciência de dados" },
        { icon: "ti-device-gamepad-2", nome: "Desenvolvimento de jogos" },
    ];

    const Categoria = ({ titulo, children }: { titulo: string; children: React.ReactNode }) => (
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest whitespace-nowrap">{titulo}</span>
                <div className="h-px bg-white/10 flex-grow" />
            </div>
            {children}
        </div>
    );

    const TechChip = ({ name, src }: { name: string; src: string }) => (
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/80 text-sm hover:border-cyan-300/40 transition-colors">
            <img src={src} alt={name} className="w-5 h-5 object-contain" />
            {name}
        </div>
    );

    return (
        <div id="habilidade" className="scroll-mt-12">
            <div className="flex items-center w-full py-10">
                <div className="border-t border-cyan-300 flex-grow mr-3" />
                <h1 className="md:text-3xl text-xl text-white">
                    <span className="text-cyan-300">02</span>.Habilidades
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">

                <div>
                    <Categoria titulo="Frontend">
                        <div className="flex flex-wrap gap-2">
                            {frontend.map((tech) => <TechChip key={tech.name} {...tech} />)}
                        </div>
                    </Categoria>

                    <Categoria titulo="Backend">
                        <div className="flex flex-wrap gap-2">
                            {backend.map((tech) => <TechChip key={tech.name} {...tech} />)}
                        </div>
                    </Categoria>

                    <Categoria titulo="Banco de dados">
                        <div className="flex flex-wrap gap-2">
                            {bancos.map((tech) => <TechChip key={tech.name} {...tech} />)}
                        </div>
                    </Categoria>

                    <Categoria titulo="DevOps & ferramentas">
                        <div className="flex flex-wrap gap-2">
                            {devops.map((tech) => <TechChip key={tech.name} {...tech} />)}
                        </div>
                    </Categoria>
                </div>

                <div>
                    <Categoria titulo="Soft skills">
                        <div className="flex flex-col gap-3">
                            {softSkills.map((skill) => (
                                <div key={skill.titulo} className="flex items-start gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                                    <i className={`ti ${skill.icon} text-cyan-300 text-xl mt-0.5 flex-shrink-0`} />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium text-white/90">{skill.titulo}</span>
                                        <span className="text-xs text-white/50 leading-relaxed">{skill.descricao}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Categoria>

                    <Categoria titulo="Estudando atualmente">
                        <div className="flex flex-col gap-2">
                            {estudando.map((item) => (
                                <div key={item.nome} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-dashed border-white/20 bg-white/[0.03] text-white/50 text-sm">
                                    <i className={`ti ${item.icon} text-cyan-300/60 text-lg`} />
                                    {item.nome}
                                </div>
                            ))}
                        </div>
                    </Categoria>
                </div>
            </div>
        </div>
    );
};

export default Habilidades;