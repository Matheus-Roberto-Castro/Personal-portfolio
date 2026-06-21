import profileImg from '../assets/images/profile.jpeg';

const Sobre: React.FC = () => {
    return (
        <div id="sobre" className="scroll-mt-20 flex flex-col items-center w-full mx-auto px-4">
            
            <div className="flex items-center w-full max-w-5xl mb-10">
                <h1 className="text-3xl text-white">
                    <span className="text-cyan-300">01</span>.Sobre Mim
                </h1>
                <div className="border-t border-cyan-300 flex-grow ml-3 mt-3" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-5xl">
                <p className="text-zinc-400 text-sm sm:text-base text-justify md:text-left md:flex-1">
                    Olá! Me chamo Matheus. Dentre muitos dos meus hobbies, os que mais ocupo meu tempo hoje em dia são: aprender sobre tecnologia em geral, tocar guitarra e desenhar. Meu interesse por tecnologia começou desde criança, quando eu passava minhas tardes jogando jogos de quebra-cabeça online, que, devido a utilizarem muitos conceitos de HTML e CSS, me renderam um conhecimento prévio.
                    <br /><br />
                    Hoje em dia, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC. No meu tempo livre, gosto de produzir jogos e projetos pessoais, além de estudar para evoluir profissionalmente — principalmente nas áreas de cibersegurança e ciência de dados. Meus objetivos atuais são me aprofundar em novas tecnologias de desenvolvimento, e buscar oportunidades de emprego na área para contribuir e crescer junto com a empresa.
                </p>
                <div className="md:w-2/5 flex justify-center">
                    <div className="relative">
                        <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-cyan-300/40">
                            <img
                                src={profileImg}
                                alt="Matheus"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;