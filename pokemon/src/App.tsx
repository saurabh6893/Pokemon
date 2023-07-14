import { Container } from "react-bootstrap"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Homescreen from "./Screens/Homescreen"

function App() {

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />


    </>
  )
}

export default App
