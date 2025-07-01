import { motion, AnimatePresence } from 'framer-motion';

interface ProjetoModalProps {
    titulo: string;
    descricao: string;
    imagem: string;
    link: string;
    tecnologias: string[];
    onClose: () => void;
}

const ProjetoModal: React.FC<ProjetoModalProps> = ({ titulo, descricao, imagem, link, tecnologias, onClose }) => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    layoutId={`card-${titulo}`}
                    className="relative rounded-lg shadow-lg w-full max-w-full h-full overflow-y-auto // Alterado para mobile md:max-w-xl md:max-h-[98vh] md:overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/30 text-black // Alterado para preto e fundo
                                   hover:bg-white/50 hover:scale-110 focus:outline-none transition-transform transform"
                        aria-label="Fechar Modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <motion.img
                        layoutId={`image-${titulo}`}
                        className="rounded-t-lg object-cover w-full"
                        src={imagem}
                        alt={titulo}
                    />
                    <motion.div
                        layoutId={`info-${titulo}`}
                        className='p-6 text-left bg-gray-900/70 backdrop-blur-xl rounded-b-lg'
                    >
                        <h2 className="text-2xl text-white font-bold mb-2">{titulo}</h2>
                        <p className="text-white/70 mb-4">{descricao}</p>
                        <h3 className="text-xl text-white/80 font-bold mb-2 underline">Tecnologias utilizadas:</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tecnologias.map((tech, i) => (
                                <span key={i} className="border-2 text-sm text-cyan-400 px-3 py-1 rounded-full font-bold">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-end mt-4 md:absolute md:bottom-4 md:right-4">
                            <a
                                href={link}
                                target="_blank"
                                className="hover:-translate-y-1 transition-all duration-300 text-white hover:text-cyan-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 fill-current"
                                >
                                    <path
                                        d="M12 2C6.477 2 2 6.477 2 12a10 10 0 006.84 9.486c.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.462-1.11-1.462-.909-.62.069-.609.069-.609 1.004.07 1.531 1.031 1.531 1.031.893 1.528 2.342 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.554-1.11-4.554-4.943 0-1.092.389-1.987 1.03-2.686-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.564 9.564 0 012.508-.338c.852.004 1.71.115 2.508.338 1.91-1.295 2.75-1.025 2.75-1.025.545 1.378.202 2.397.098 2.65.64.7 1.03 1.594 1.03 2.686 0 3.842-2.338 4.687-4.566 4.936.36.31.679.923.679 1.86 0 1.343-.013 2.428-.013 2.757 0 .268.18.58.688.482A10 10 0 0022 12c0-5.523-4.477-10-10-10z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjetoModal;