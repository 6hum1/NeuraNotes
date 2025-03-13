import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import './App.css';
    import Home from './Home';
    import Notes from './Notes';
    import Blog from './Blog';
    import Contact from './Contact';

    function App() {
      return (
        <Router>
          <div className="app-container">
            <header>
              <nav>
                <div className="logo">EDU-VISION</div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/notes">Notes</Link></li>
                  <li><Link to="/blog">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <footer>
              <p>&copy; 2024 All Copyrights are reserved</p>
            </footer>
          </div>
        </Router>
      );
    }

    export default App;
