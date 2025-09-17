
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainPage from './pages/home'
import Projects from './pages/projects/page'
import About from './pages/about/page'
import RootLayout from './pages/layout/layout'
import NotFound404 from './pages/not-found'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence >
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />

            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App;
