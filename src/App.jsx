import NavBar from "./components/Nav"
import GlobalStyle from "./global"
import Home from "./pages/HomePage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/register" element={<RegisterPage></RegisterPage>}/>
          <Route path="/register/:updateId" element={<RegisterPage></RegisterPage>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
