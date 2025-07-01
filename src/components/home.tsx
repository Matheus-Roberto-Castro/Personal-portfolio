const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center scroll-mt-24 -mt-10 mb-5 px-6 md:px-12"
    >
      <div className="flex flex-col justify-center text-left items-start pt-20 mt-40 mb-40 w-full max-w-5xl">
        <p className="text-cyan-300 text-xl md:text-2xl">Olá! Meu nome é</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-semibold leading-tight">
          Matheus de Castro
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-zinc-400 font-light">
          Sou Desenvolvedor de Software.
        </h2>
      </div>
    </section>
  );
};

export default Home;
