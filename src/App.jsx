import About from "./components/About"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

const App = () => {
  return (
    <div className="bg-linear-to-r from-[#0e1c24] to-[#202d3f]">
      <Header />
      <Container>
        <main>
          <Hero />
          <About />
          <Services />
        </main>
      </Container>
      <Footer/>
    </div>
  )
}

export default App