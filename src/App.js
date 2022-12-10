import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeAppFooter from './components/CafeAppFooter';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>FIFE.</h1>
        <nav>
          <ul>
            <li>
              <a className="navigation" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navigation" href="https://github.com/safinaabk/Project-Capstone" target="_blank">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafes/:id" element={<DetailPage />} />
          <Route path="*" element={'Notfound'} />
        </Routes>
        <CafeAppFooter />
      </main>
    </div>
  );
}

export default App;
