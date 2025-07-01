const Sobre: React.FC = () => {
    return (
        <div>
            <div id="sobre" className="flex flex-col justify-center items-start gap-10 max-width-40 max-w-3xl text-left scroll-mt-20">
                <div className="flex items-center w-full">
                    <h1 className="text-3xl text-white">
                        <span className="text-cyan-300">01</span>.Sobre Mim
                    </h1>
                    <div className="border-t-1 border-cyan-300 flex-grow ml-3 mt-3" />
                </div>
                <p className="text-zinc-400">Olá! Me chamo Matheus. Dentre muitos dos meus hobbies, os que mais ocupo meu tempo hoje em dia são: aprender sobre tecnologia em geral, tocar guitarra e desenhar. Meu interesse por tecnologia começou desde criança, quando eu passava minhas tardes jogando puzzles online, que, devido a utilizarem muitos conceitos de HTML e CSS, me renderam um conhecimento prévio.
                    <br /><br />
                    Atualmente, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC, e meus objetivos atuais são me aprofundar em novas tecnologias de desenvolvimento, tanto de back-end quanto de front-end, e buscar oportunidades de emprego na área para aprofundar ainda mais os conhecimentos que tenho.</p>
            </div>
            <img src="" alt="" />
        </div>
    )
}

export default Sobre