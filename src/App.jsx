// import Practice from "./components/Practice"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Explore from './pages/Explore'
import Contact from "./pages/Contact"
import About from "./pages/About"
import NoPage from "./pages/NoPage"
// import Header from "./pages/Header"
import Layout from "./pages/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
