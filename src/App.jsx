import './App.css'
import { tecnologias } from './data/TechData'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import Marquee from "react-fast-marquee";
import ContactForm from './components/ContactForm'
import { toast, ToastContainer } from 'react-toastify'


function App() {

  return (
    <section className='bg-[#101010] font-code px-10'>
      <ToastContainer />
      
      <div  className='max-w-5xl mx-auto space-y-8 pt-18 sm:pt-36 pb-14'>        
        <Navbar/>
        <section id='1' className='text-left space-y-4 mt-4 items-center flex flex-col sm:flex-row justify-between'>
          <div  className='flex flex-col'>
            <p className='text-md md:text-lg text-[#f3f3f398] shiny-white'>Hola, soy Donato De Battista <span className='text-white'>👋</span></p>
            <h1 className='text-whiteText text-6xl sm:text-6xl font-code font-black'>
                Software 
                developer
            </h1>
            <p className='text-sm sm:text-md md:text-lg text-[#8a8a8a98] mt-2'>Creando experiencias digitales con tecnologías de vanguardia</p>
          </div>
            <img 
                  className='w-46 sm:w-48 md:w-56 sm:ml-4 mt-8 sm:mt-0 rounded-full drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]' 
                  src="/images/doni3.jpeg" alt="Donato De Battista"
            />
        </section>

        <Marquee
          gradient={true} 
          gradientWidth={80} 
          gradientColor={["#101010"]} 
          speed={80}
          className='mt-15'
        >
          {tecnologias.map((tech) => (
            <Tech key={tech.name} tech={tech} />
          ))}
        </Marquee>


        
        <div className='mt-14 sm:mt-30'>
          <h1 className='text-3xl sm:text-4xl font-black text-whiteText'>Sobre mi</h1>
          <p className='text-[#f3f3f398] mt-2 sm:mt-5 text-xs md:text-lg'>Hola! soy Donato De Battista, desarrollador web y analista de sistemas argentino. Me dedico a crear soluciones digitales con tecnologías modernas, abarcando tanto el back-end como el front-end.
            Apasionado por construir productos funcionales, eficientes y con una gran experiencia de usuario. 
          </p>
        </div>
        <hr  className='text-[#24242498] sm:mt-18'/>

        <div className='sm:mt-18'>
          <p className='text-[#a476ff8f] text-md sm:text-lg'>Mi trabajo</p>
          <h2 className='text-3xl sm:text-4xl font-black text-whiteText'>Proyectos</h2>
        </div>

        <section id='2' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ProjectCard
            title="Linkora"
            imageUrl="images/projects-preview/linkora.png"
            repoUrl="https://github.com/donatodebattista/linkora-frontend"
            siteUrl="https://mylinkora.netlify.app"
            isDeployed={true}
          />
          <ProjectCard
            title="Flybondi challenge"
            imageUrl="images/projects-preview/flybondi.png"
            repoUrl="https://github.com/donatodebattista/flybondi-challenge"
            siteUrl="https://beamish-sawine-fbfad0.netlify.app/"
            isDeployed={false}
          />
          <ProjectCard
            title="Crypto Tracker"
            imageUrl="images/projects-preview/cryptoTracker.png"
            repoUrl="https://github.com/usuario/proyecto1"
            siteUrl="https://charming-sopapillas-bc7b7e.netlify.app/"
            isDeployed={false}
          />
        </section>
        
        <hr className='text-[#24242498] mt-12 sm:mt-18'/>

        <section id='3' className='w-full my-4 sm:my-18'>
          <div className='max-w-5xl mx-auto'>
            <p className='text-[#a476ff8f] text-md sm:text-lg'>Hablemos</p>
            <h2 className='text-3xl sm:text-4xl font-black text-whiteText'>Contacto</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 sm:mt-8'>
              <div className='text-[#f3f3f398]'>
                <p className='mb-2 text-sm'>¿Tienes alguna pregunta o un proyecto en mente? No dudes en contactarme</p>
                <div className='flex items-center gap-2 text-xs'>
                  <p>Ubicación: <span className='text-white'>Entre Ríos, Argentina</span></p>
                </div>
              </div>
              <div>
                  <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <hr className='text-[#24242498] mt-12 sm:mt-18'/>

        <Footer/>
      </div>
    </section>
  )
}

export default App
