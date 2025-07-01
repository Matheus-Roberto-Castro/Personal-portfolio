import { useState } from "react";
import { Menu, X } from "lucide-react";
import Resumo from "../assets/files/CV_MatheusRoberto.pdf";

const Header: React.FC = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-xl text-white py-3 shadow-md z-10">
            <div className="w-full px-6 md:px-10 flex items-center justify-between">
                <a href="#home" className="text-xl font-bold hover:text-cyan-400 transition">
                    &lt;/&gt;MatheusRCastro
                </a>
                <nav className="hidden md:flex space-x-6 items-center">
                    <a href="#habilidade" className="hover:text-cyan-400 transition">Habilidades</a>
                    <a href="#projetos" className="hover:text-cyan-400 transition">Projetos</a>
                    <a href="#contato" className="hover:text-cyan-400 transition">Contato</a>
                    <button
                        onClick={() => window.open(Resumo, '_blank')}
                        className="text-cyan-400 py-2 px-4 rounded border-2 border-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Currículo
                    </button>
                </nav>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {menuAberto && (
                <div className="md:hidden px-6 mt-4 space-y-4 flex flex-col items-start">
                    <a href="#habilidade" className="hover:text-cyan-400 transition" onClick={() => setMenuAberto(false)}>Habilidades</a>
                    <a href="#projetos" className="hover:text-cyan-400 transition" onClick={() => setMenuAberto(false)}>Projetos</a>
                    <a href="#contato" className="hover:text-cyan-400 transition" onClick={() => setMenuAberto(false)}>Contato</a>
                    <button
                        onClick={() => {
                            window.open(Resumo, '_blank');
                            setMenuAberto(false);
                        }}
                        className="text-cyan-400 py-2 px-4 rounded border-2 border-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Currículo
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
