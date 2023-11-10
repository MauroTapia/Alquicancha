import { Outlet } from "react-router"
import Header from "./modules/Header"
import Footer from "./modules/Footer"
import Container from "./atoms/Container"

function App() {

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default App
