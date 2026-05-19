import './App.css'
import { tecnologias } from './data/TechData'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import Marquee from "react-fast-marquee";
import ContactForm from './components/ContactForm'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div className='ambient-bg min-h-screen font-sans px-5 sm:px-10'>
      <ToastContainer />

      <div className='max-w-5xl mx-auto space-y-8 pt-18 sm:pt-36 pb-14'>
        <Navbar />

        {/* ── Hero ── */}
        <section id='1' className='text-left mt-4 mb-16 items-center flex flex-col sm:flex-row justify-between gap-8'>
          <div className='flex flex-col animate-fade-up'>
            <span className='inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium glass text-[#a476ffcc] w-fit'>
              <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
              Disponible para proyectos
            </span>
            <p className='text-md md:text-lg text-[#f3f3f398] shiny-white'>Hola, soy Donato De Battista <span style={{ WebkitTextFillColor: 'initial' }}>👋</span></p>
            <h1 className='text-whiteText text-5xl sm:text-6xl font-black tracking-tight leading-tight mt-1'>
              Software<br />
              <span style={{ background: 'linear-gradient(135deg,#fff 30%,#a476ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>developer</span>
            </h1>
            <p className='text-sm sm:text-md md:text-base text-[#8a8a8a] mt-3 max-w-xs leading-relaxed'>
              Creando experiencias digitales con tecnologías de vanguardia
            </p>
          </div>

          <div className='animate-fade-up-d2 flex-shrink-0 mt-8 sm:mt-0'>
            <img
              className='w-44 sm:w-48 md:w-56 rounded-full avatar-glow'
              src="/images/doni3.jpeg"
              alt="Donato De Battista"
            />
          </div>
        </section>

        {/* ── Tech Marquee ── */}
        <div className='animate-fade-up-d3'>
          <Marquee
            gradient={true}
            gradientWidth={80}
            gradientColor={"#09090f"}
            speed={60}
          >
            {tecnologias.map((tech) => (
              <Tech key={tech.name} tech={tech} />
            ))}
          </Marquee>
        </div>

        {/* ── About ── */}
        <div className='mt-14 sm:mt-24 animate-fade-up-d4'>
          <p className='text-[#a476ffcc] text-xs uppercase tracking-widest font-semibold mb-2'>Sobre mí</p>
          <h2 className='text-3xl sm:text-4xl font-black text-whiteText tracking-tight'>¿Quién soy?</h2>
          <p className='text-[#f3f3f398] mt-4 text-sm md:text-base leading-relaxed max-w-2xl'>
            Soy Donato De Battista, analista de Sistemas, estudiante avanzado de Licenciatura en Sistemas y desarrollador web argentino. Me dedico a crear soluciones digitales con tecnologías modernas, abarcando tanto el back-end como el front-end.
            Apasionado por construir productos funcionales, eficientes y con una gran experiencia de usuario.
          </p>
        </div>

        <hr className='divider' />

        {/* ── Projects ── */}
        <div>
          <p className='text-[#a476ffcc] text-xs uppercase tracking-widest font-semibold mb-2'>Mi trabajo</p>
          <h2 className='text-3xl sm:text-4xl font-black text-whiteText tracking-tight'>Proyectos</h2>
        </div>

        <section id='2' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            title="Linkora"
            imageUrl="images/projects-preview/linkora.png"
            repoUrl="https://github.com/donatodebattista/linkora-frontend"
            siteUrl="https://mylinkora.netlify.app"
            isDeployed={true}
            isRepoDisabled={false}
            isSiteDisabled={false}
          />
          <ProjectCard
            title="Flybondi challenge"
            imageUrl="images/projects-preview/flybondi.png"
            repoUrl="https://github.com/donatodebattista/flybondi-challenge"
            siteUrl="https://flybondichallenge.netlify.app/"
            isDeployed={true}
            isRepoDisabled={false}
            isSiteDisabled={false}
          />
          <ProjectCard
            title="GeoTurismo"
            imageUrl="images/projects-preview/geoturismo.png"
            repoUrl="https://github.com/donatodebattista/georedis-api"
            siteUrl=""
            isDeployed={false}
            isRepoDisabled={false}
            isSiteDisabled={true}
          />
        </section>

        <hr className='divider' />

        {/* ── Contact ── */}
        <section id='3' className='w-full my-4 sm:my-16'>
          <div className='max-w-5xl mx-auto'>
            <p className='text-[#a476ffcc] text-xs uppercase tracking-widest font-semibold mb-2'>Hablemos</p>
            <h2 className='text-3xl sm:text-4xl font-black text-whiteText tracking-tight'>Contacto</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
              <div className='text-[#f3f3f398]'>
                <p className='mb-4 text-sm leading-relaxed'>¿Tienes alguna pregunta o un proyecto en mente? No dudes en contactarme.</p>
                <div className='flex items-center gap-2 text-xs py-3 px-4 rounded-xl glass w-fit'>
                  <span className='text-[#a476ffcc]'>📍</span>
                  <p>Ubicación: <span className='text-white font-medium'>Entre Ríos, Argentina</span></p>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <hr className='divider' />

        <Footer />
      </div>
    </div>
  )
}

export default App
