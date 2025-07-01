import './App.css'
import TypewriterEffect from './components/efeitoBG'
import Header from './components/header'
import Home from './components/home'
//import Sobre from './components/sobre'
import Habilidades from './components/habilidades'
import Footer from './components/footer'
import Projetos from './components/projetos'
import Contatos from './components/contatos'

export default function App() {
  return (
    <>
    <body className="bg-zinc-900 min-h-screen">
    <Header />
    <div className="blur-[3px]"><TypewriterEffect/></div>
    <main className="bg-transparent h-screen">
      <Home/>
      {/*<Sobre/>*/}
      <Habilidades/>
      <Projetos/>
      <Contatos/>
      <Footer/>
    </main>
    </body>
    </>
  )
}