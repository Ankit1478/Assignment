import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" exact element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
