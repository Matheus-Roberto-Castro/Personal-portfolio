import './TypewriterEffect.css';
import Typewriter from 'typewriter-effect';

const TypewriterEffect: React.FC = () => {
    return (
        <div className="absolute top-0 right-0 md:w-1/3 w-2/3 -mt-10 md:-mt-0 min-h-[400px] h-screen overflow-hidden bg-transparent backdrop-blur-sm flex justify-center items-center z-[-1] text-white md:text-2xl text-sm text-left">
            <div className="flex items-center min-h-[400px] ">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    typewriter
                        .typeString("<span class='text-blue-400'>class</span> <span class='text-green-300'>Developer</span> <span class='text-yellow-300'>{</span>")
                        .pauseFor(400)
                        .typeString("<br />  <span class='text-blue-400'>constructor</span><span class='text-purple-400'>() {</span>")
                        .pauseFor(300)
                        .typeString("<br />    <span class='text-blue-400'>this</span><span class='text-cyan-200'>.name</span> = <span class='text-orange-300'>'Matheus'</span>;")
                        .typeString("<br />    <span class='text-blue-400'>this</span><span class='text-cyan-200'>.stack</span> = <span class='text-purple-400'>[</span><span class='text-orange-300'>'React'</span>, <span class='text-orange-300'>'TypeScript'</span><span class='text-purple-400'>]</span>;")
                        .typeString("<br />    <span class='text-blue-400'>this</span><span class='text-cyan-200'>.focus</span> = <span class='text-orange-300'>'resolver problemas'</span>;")
                        .typeString("<br />  <span class='text-purple-400'>}</span>")
                        .pauseFor(300)
                        .typeString("<br /><span class='text-yellow-300'>}</span><br /><br />")
                        .typeString("<span class='text-blue-400'>const</span> <span class='text-blue-300'>dev</span> = <span class='text-blue-400'>new</span> <span class='text-green-300'>Developer</span>();")
                        .pauseFor(1200)
                        .deleteAll()
                        .start();

                }}
                options={{
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: '_',
                    cursorClassName: 'cursor'
                }}
            />
            </div>
        </div>
    );
}

export default TypewriterEffect;