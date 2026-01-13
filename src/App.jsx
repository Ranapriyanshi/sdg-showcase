import Header from './components/Header'
import Hero from './components/Hero'
import MotivationLetter from './components/MotivationLetter'
import Achievements from './components/Achievements'
import ProofOfWork from './components/ProofOfWork'
import LinkedInPosts from './components/LinkedInPosts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MotivationLetter />
      <Achievements />
      <LinkedInPosts />
      <ProofOfWork />
      <Footer />
    </div>
  )
}

export default App
