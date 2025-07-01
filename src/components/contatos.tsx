const Contatos: React.FC = () => {
    return (
        <div>
            <div id="contato" className="flex items-center w-full py-20">
                <div className="border-t-1 border-cyan-300 flex-grow mr-3 mt-2" />
                <h1 className="md:text-3xl text-xl text-white">
                    <span className="text-cyan-300">03</span>.Contato
                </h1>
                <div className="border-t-1 border-cyan-300 flex-grow ml-3 mt-2" />
            </div>
            <div className="md:py-20 py-4">
                <h2 className="text-white/80 text-center text-lg max-w-xl mx-auto mb-8">
                    Estou sempre aberto a novas conexões, parcerias ou conversas. Sinta-se à vontade para entrar em contato.
                </h2>
                <div>
                    <a href="mailto:matheusrcastros@gmail.com" target="_blank" className="text-cyan-400 py-2 px-4 rounded border-2 border-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 inline-block">
                        De um olá
                    </a>
                </div>
                <div className="flex justify-center py-10 gap-8">
                    <a
                        href="https://github.com/Matheus-Roberto-Castro"
                        target="_blank"
                        className="hover:-translate-y-1 transition-all duration-300 text-white hover:text-cyan-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 fill-current"
                        >
                            <path
                                d="M12 2C6.477 2 2 6.477 2 12a10 10 0 006.84 9.486c.5.092.682-.217.682-.483 
                                0-.237-.009-.868-.013-1.703-2.782.604-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.462-1.11-1.462-.909-.62 
                                .069-.609.069-.609 1.004.07 1.531 1.031 1.531 1.031.893 1.528 2.342 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22
                                -.253-4.554-1.11-4.554-4.943 0-1.092.389-1.987 1.03-2.686-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 
                                1.025a9.564 9.564 0 012.508-.338c.852.004 1.71.115 2.508.338 1.91-1.295 2.75-1.025 2.75-1.025.545 
                                1.378.202 2.397.098 2.65.64.7 1.03 1.594 1.03 2.686 0 3.842-2.338 
                                4.687-4.566 4.936.36.31.679.923.679 1.86 0 
                                1.343-.013 2.428-.013 2.757 0 .268.18.58.688.482A10 10 0 0022 
                                12c0-5.523-4.477-10-10-10z"
                            />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-r-castro-70091a32b/" target="_blank" className="hover:-translate-y-1 transition-all duration-300 text-white hover:text-cyan-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            width="30"
                            height="30"
                            className="w-8 h-8 fill-current">
                            <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contatos