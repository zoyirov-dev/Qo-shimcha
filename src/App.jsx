import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Promotion from './pages/Promotion';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('promotion');

  const renderPage = () => {
    switch (currentPage) {
      case 'promotion':
        return <Promotion />;
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing />;
      case 'work':
        return <Work />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Promotion />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
