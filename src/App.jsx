import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Rocket, Calendar, MapPin, Clock, MessageCircle } from 'lucide-react'
import backgroundVideo from './assets/background-video.mp4'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    {
      id: 'convite',
      title: 'Você está sendo convidado para',
      subtitle: 'festinha mais animada das galáxias!',
      description: 'Prepare-se para uma aventura espacial incrível!'
    },
    {
      id: 'aniversariante',
      title: 'Vamos comemorar meu 2° ano-Luz',
      subtitle: 'Matteo',
      description: 'Uma viagem intergaláctica para celebrar essa data especial!'
    },
    {
      id: 'informacoes',
      title: 'O foguete será lançado',
      subtitle: '',
      description: ''
    }
  ]

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(index)
    }
  }

  const openGoogleMaps = () => {
    const mapsUrl = "https://www.google.com/maps/place/R.+Ramiro+Barcelos,+439+-+Santa+Fe,+Sapiranga+-+RS,+93815-016/@-29.6490009,-51.0151182,17z/data=!3m1!4b1!4m6!3m5!1s0x95194081e09df01b:0xde514c78f27cc115!8m2!3d-29.6490056!4d-51.0125433!16s%2Fg%2F11w7qd92p5?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
    window.open(mapsUrl, '_blank')
  }

  const confirmPresence = () => {
    const whatsappUrl = "https://wa.me/5551995668138?text=Presen%C3%A7a%20confirmada%20para%20o%20Anivers%C3%A1rio%20do%20Matteo!"
    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Star = ({ style }) => (
    <div 
      className="absolute bg-yellow-300 rounded-full animate-pulse"
      style={style}
    />
  )

  const AnimatedRocket = () => (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto mb-6 sm:mb-8">
      {/* Campo de estrelas */}
      <div className="absolute inset-0">
        <div className="w-1 h-1 bg-white rounded-full absolute top-8 left-16 animate-pulse"></div>
        <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-20 right-20 animate-pulse"></div>
        <div className="w-1 h-1 bg-blue-300 rounded-full absolute bottom-24 left-12 animate-pulse"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-16 right-16 animate-pulse"></div>
        <div className="w-1 h-1 bg-purple-300 rounded-full absolute top-32 left-8 animate-pulse"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative animate-float">
          {/* Foguete usando a imagem fornecida */}
          <img 
            src="/rocket.png" 
            alt="Foguete espacial" 
            className="w-32 h-32 sm:w-48 sm:h-48 object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
            }}
          />
        </div>
      </div>
      
      {/* Nuvens de vapor */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 w-full">
        <div className="w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-white via-gray-100 to-transparent rounded-full opacity-60 absolute bottom-0 left-8 sm:left-12 shadow-lg animate-pulse"></div>
        <div className="w-20 h-10 sm:w-28 sm:h-14 bg-gradient-to-r from-gray-100 via-white to-transparent rounded-full opacity-50 absolute bottom-2 left-12 sm:left-20 shadow-md animate-pulse"></div>
        <div className="w-28 h-14 sm:w-36 sm:h-18 bg-gradient-to-r from-white via-gray-200 to-transparent rounded-full opacity-55 absolute bottom-0 right-12 sm:right-16 shadow-lg animate-pulse"></div>
      </div>
    </div>
  )

  const SolarSystem = () => (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-6 sm:mb-8">
      {/* Sol */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50">
        <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      {/* Órbitas */}
      <div className="absolute inset-0 border border-white/20 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
      <div className="absolute inset-3 sm:inset-4 border border-white/15 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      <div className="absolute inset-6 sm:inset-8 border border-white/10 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
      
      {/* Planetas */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-spin" style={{animationDuration: '10s', transformOrigin: '50% 128px'}}></div>
      <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse', transformOrigin: '50% 108px'}}></div>
      <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full animate-spin" style={{animationDuration: '8s', transformOrigin: '50% 88px'}}></div>
      
      {/* Foguete pequeno orbitando */}
      <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 animate-spin" style={{animationDuration: '12s', transformOrigin: '50% 118px'}}>
        <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" />
      </div>
    </div>
  )

  const SpaceRocket = () => (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto mb-6 sm:mb-8">
      {/* Campo de estrelas denso */}
      <div className="absolute inset-0">
        <div className="w-1 h-1 bg-white rounded-full absolute top-6 left-12 sm:left-16 animate-pulse"></div>
        <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-12 right-16 sm:right-20 animate-pulse"></div>
        <div className="w-1 h-1 bg-blue-300 rounded-full absolute bottom-20 sm:bottom-24 left-10 sm:left-12 animate-pulse"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-12 sm:bottom-16 right-12 sm:right-16 animate-pulse"></div>
        <div className="w-1 h-1 bg-purple-300 rounded-full absolute top-16 sm:top-20 left-6 sm:left-8 animate-pulse"></div>
        <div className="w-1 h-1 bg-pink-300 rounded-full absolute bottom-28 sm:bottom-32 right-6 sm:right-8 animate-pulse"></div>
        <div className="w-1 h-1 bg-cyan-300 rounded-full absolute top-24 sm:top-28 right-10 sm:right-12 animate-pulse"></div>
        <div className="w-2 h-2 bg-orange-300 rounded-full absolute bottom-16 sm:bottom-20 left-16 sm:left-20 animate-pulse"></div>
      </div>
      
      {/* Foguete principal usando a imagem fornecida */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative animate-float">
          <img
            src='/rocket.png' 
            alt="Foguete espacial" 
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.4))'
            }}
           />
         
        </div>
      </div>
      
      {/* Planetas distantes mais detalhados */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-300 via-red-400 to-red-600 rounded-full opacity-75 shadow-xl">
        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full absolute top-2 sm:top-3 left-2 sm:left-3 opacity-90 shadow-md"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-700 rounded-full absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-70"></div>
        <div className="w-1.5 h-6 sm:w-2 sm:h-8 bg-red-800 rounded-full absolute top-4 sm:top-6 right-1.5 sm:right-2 opacity-60"></div>
      </div>
      <div className="absolute bottom-10 sm:bottom-12 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-300 via-purple-400 to-purple-600 rounded-full opacity-70 shadow-lg">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full absolute top-2 sm:top-3 left-2 sm:left-3 opacity-95 shadow-sm"></div>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-100 rounded-full absolute bottom-2 sm:bottom-3 right-2 sm:right-3 opacity-80"></div>
        <div className="w-1 h-3 sm:h-4 bg-purple-800 rounded-full absolute top-4 sm:top-6 right-0.5 sm:right-1 opacity-50"></div>
      </div>
      <div className="absolute top-12 sm:top-16 left-10 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-60 shadow-md">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-100 rounded-full absolute top-1.5 sm:top-2 left-1.5 sm:left-2 opacity-90"></div>
        <div className="w-3 h-1 sm:w-4 sm:h-1 bg-green-700 rounded-full absolute bottom-2 sm:bottom-3 left-3 sm:left-4 opacity-70"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen relative text-white overflow-x-hidden">
      {/* Vídeo de fundo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Overlay escuro para melhor legibilidade */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      
      {/* Conteúdo */}
      <div className="relative z-20">
        {/* Estrelas de fundo */}
        <Star style={{ top: '10%', left: '5%', width: '10px', height: '10px' }} />
        <Star style={{ top: '15%', right: '10%', width: '15px', height: '15px' }} />
        <Star style={{ top: '80%', left: '15%', width: '12px', height: '12px' }} />
        <Star style={{ top: '75%', right: '20%', width: '8px', height: '8px' }} />
        <Star style={{ top: '30%', left: '80%', width: '10px', height: '10px' }} />
        <Star style={{ top: '50%', left: '10%', width: '6px', height: '6px' }} />
        <Star style={{ top: '60%', right: '15%', width: '14px', height: '14px' }} />
        <Star style={{ top: '25%', left: '25%', width: '8px', height: '8px' }} />

        {/* Navegação */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex space-x-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === index ? 'bg-red-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </nav>

        {/* Seção 1: Convite */}
        <section id="section-0" className="section min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
              {sections[0].title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 text-yellow-300 drop-shadow-2xl">
              {sections[0].subtitle}
            </h2>
            <AnimatedRocket />
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white drop-shadow-lg">
              {sections[0].description}
            </p>
            <Button 
              onClick={() => scrollToSection(1)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl"
            >
              <Rocket className="mr-2" />
              Vamos decolar!
            </Button>
          </div>
          <ChevronDown 
            className="absolute bottom-8 animate-bounce cursor-pointer text-white drop-shadow-lg" 
            size={24}
            onClick={() => scrollToSection(1)}
          />
        </section>

        {/* Seção 2: Aniversariante */}
        <section id="section-1" className="section min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
              {sections[1].title}
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-red-400 drop-shadow-2xl">
              {sections[1].subtitle}
            </h2>
            <SolarSystem />
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white drop-shadow-lg">
              {sections[1].description}
            </p>
            <Button 
              onClick={() => scrollToSection(2)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl"
            >
              Ver detalhes da missão
            </Button>
          </div>
          <ChevronDown 
            className="absolute bottom-8 animate-bounce cursor-pointer text-white drop-shadow-lg" 
            size={24}
            onClick={() => scrollToSection(2)}
          />
        </section>

        {/* Seção 3: Informações */}
        <section id="section-2" className="section min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl">
              {sections[2].title}
            </h1>
            <SpaceRocket />
            
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-lg mx-auto border border-white/30 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <Calendar className="text-red-400 drop-shadow-lg" size={24} />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-red-400 drop-shadow-lg">Sábado, 15/11</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <Clock className="text-yellow-300 drop-shadow-lg" size={24} />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-yellow-300 drop-shadow-lg">15:00</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <MapPin className="text-blue-300 drop-shadow-lg" size={24} />
                  <div className="text-center">
                    <p className="text-base sm:text-xl text-white drop-shadow-lg">Rua Ramiro Barcelos, 439</p>
                    <p className="text-base sm:text-xl text-white drop-shadow-lg">Bairro Santa Fé</p>
                    <Button 
                      onClick={openGoogleMaps}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full mt-2 shadow-lg"
                    >
                      <MapPin className="mr-1" size={14} />
                      Ver no Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
             <Button
  onClick={confirmPresence}
  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl w-full"
>
  <MessageCircle className="mr-2" />
  Confirmar Presença
</Button>
              
             
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

