import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import Traditional from './pages/traditional'
import Digital from './pages/digital'
import Photography from './pages/photography'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traditional" element={<Traditional />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Layout>
  )
}

export default App
