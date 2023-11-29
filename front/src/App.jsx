import { Outlet } from "react-router"
import Header from "./modules/Header"
import Container from "./atoms/Container"

function App() {

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
