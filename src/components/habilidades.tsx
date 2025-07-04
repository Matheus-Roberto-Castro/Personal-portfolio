const Habilidades: React.FC = () => {

    const tecnologias = [
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Jira", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    ];


    return (
    <div id="habilidade" className="scroll-mt-12">
      <div className="flex items-center w-full py-10">
        <div className="border-t-1 border-cyan-300 flex-grow mr-3 mt-2" />
        <h1 className="md:text-3xl text-xl text-white">
          <span className="text-cyan-300">01</span>.Habilidades
        </h1>
      </div>

      <p className="flex text-white/80  text-left md:text-xl">Tecnologias e ferramentas com as quais estou familiarizado:</p>

      <div className="flex flex-wrap justify-center gap-10 md:gap-14 md:w-2/3  mx-auto md:my-20 my-5 pb-20 md:pb-0 ">
        {tecnologias.map((tecnologia) => (
          <img 
            key={tecnologia.name}
            className="w-12 h-12 hover:-translate-y-2 active:-translate-y-2 transition-all duration-300"
            src={tecnologia.src}
            alt={tecnologia.name}
            title={tecnologia.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;