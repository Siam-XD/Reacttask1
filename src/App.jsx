import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/hero"
import Services from "./components/Services"

const App = () => {
  return (
    <div className="bg-linear-to-r from-[#0e1c24] to-[#202d3f]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer/>
    </div>
  )
}

export default App