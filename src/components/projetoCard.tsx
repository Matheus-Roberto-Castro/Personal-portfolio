import { motion } from "framer-motion";

interface ProjetoCardProps {
    titulo: string;
    descricao: string;
    imagem: string;
    link: string;
    alinhamento: 'left' | 'right';
    onAbrir: () => void
}

const ProjetoCard: React.FC<ProjetoCardProps> = ({ titulo, descricao, imagem, link, alinhamento, onAbrir }) => {
    return (
        <motion.div
            layoutId={`card-${titulo}`}
            onClick={() => onAbrir()}
            className='flex flex-col items-center justify-center w-full my-10 md:my-20'
        >
            <div
                className={`relative flex flex-col items-center w-full max-w-4xl
                bg-gray-900 rounded-sm shadow-md md:bg-transparent md:shadow-none md:flex-row ${alinhamento === 'left' ? 'md:justify-end' : ''}`}
            >
                <motion.img
                    layoutId={`image-${titulo}`}
                    className='w-full h-auto object-cover rounded-sm shadow-md mb-4 md:w-lg md:h-full'
                    src={imagem}
                    alt={titulo}
                />

                <motion.div
                    layoutId={`info-${titulo}`}
                    className={`flex flex-col gap-2 w-[90%] max-w-md text-center items-center
                    md:absolute ${alinhamento === 'right' ? 'md:right-6 md:items-end md:text-right' : 'md:left-6 md:items-start md:text-left'}
                    `}
                >
                    <h3 className="text-xl text-white font-bold mb-2">{titulo}</h3>
                    <div className='bg-gray-900/70 backdrop-blur-xl p-6 rounded-sm md:shadow-md'>
                        <p className='text-white/60'>{descricao}</p>
                    </div>
                    <a
                        href={link}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        className="hover:-translate-y-1 transition-all duration-300 text-white hover:text-cyan-400 pb-4 md:pb-0"
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
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjetoCard;