import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from "./pages/NoPage"
import Jazyky from "./pages/Jazyky"
import Biologie from "./pages/Biologie"
import Dejepis from "./pages/Dejepis"
import Fyzika from "./pages/Fyzika"
import Chemie from "./pages/Chemie"
import Ivt from "./pages/Ivt"
import Matematika from "./pages/Matematika"
import Zsv from "./pages/Zsv"
import Zemepis from "./pages/Zemepis"

function App() {
  return (
    <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/wigym-maturity" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/jazyky" element={<Jazyky />} />
      <Route path="/biologie" element={<Biologie />} />
      <Route path="/dejepis" element={<Dejepis />} />
      <Route path="/fyzika" element={<Fyzika />} />
      <Route path="/chemie" element={<Chemie />} />
      <Route path="/ivt" element={<Ivt />} />
      <Route path="/matematika" element={<Matematika />} />
      <Route path="/zsv" element={<Zsv />} />
      <Route path="/zemepis" element={<Zemepis />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>
  )
}
  
export default App