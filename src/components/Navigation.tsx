import { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <nav className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <a
            href="/"
            className={`text-blue-600 hover:text-blue-800 transition-colors ${
              activeSection === 'home' ? 'font-bold' : ''
            }`}
          >
            Riverizons Gallery
          </a>
        </h1>
        <div className="flex gap-6">
          <a
            href="/traditional"
            className={`text-gray-700 hover:text-blue-600 transition-colors
                       ${activeSection === 'traditional' ? 'font-bold' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('traditional');
            }}
          >
            Traditional
          </a>
          <a
            href="/digital"
            className={`text-gray-700 hover:text-blue-600 transition-colors
                       ${activeSection === 'digital' ? 'font-bold' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('digital');
            }}
          >
            Digital
          </a>
          <a
            href="/photography"
            className={`text-gray-700 hover:text-blue-600 transition-colors
                       ${activeSection === 'photography' ? 'font-bold' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('photography');
            }}
          >
            Photography
          </a>
        </div>
      </div>
    </nav>
  );
}
