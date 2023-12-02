import { Outlet } from "react-router"
import Header from "./modules/Header"
import Container from "./atoms/Container"

import SendMessage from "./modules/WhatsApp/WhatsApp"
function App() {

  return (
    <>
      <Header />
      <Container>
        <SendMessage/>
        <Outlet />
        
      </Container>
    </>
  )
}

export default App
