// components/Navigation.tsx
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const navigate = useNavigate()
  const location = useLocation()

  // Set active section based on URL when component mounts or location changes
  useEffect(() => {
    const path = location.pathname
    const section = path === '/' ? 'home' : path.replace('/', '')
    setActiveSection(section)
  }, [location])

  const handleNavigation = (section: string) => {
    setActiveSection(section)
    navigate(`/${section === 'home' ? '' : section}`)
  }

  return (
    <nav className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <a
            href="/"
            className={`text-blue-600 hover:text-blue-800 transition-colors ${
              activeSection === 'home' ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('home')
            }}
          >
            Riverizons Gallery
          </a>
        </h1>
        <div className="flex gap-6">
          <a
            href="#home"
            className={`text-gray-700 hover:text-blue-600 ${
              activeSection === 'home' ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('home')
            }}
          >
            Home
          </a>
          <a
            href="/traditional"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              activeSection === 'traditional' ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('traditional')
            }}
          >
            Traditional
          </a>
          <a
            href="/digital"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              activeSection === 'digital' ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('digital')
            }}
          >
            Digital
          </a>
          <a
            href="/photography"
            className={`text-gray-700 hover:text-blue-600 transition-colors ${
              activeSection === 'photography' ? 'font-bold' : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('photography')
            }}
          >
            Photography
          </a>
        </div>
      </div>
    </nav>
  )
}
