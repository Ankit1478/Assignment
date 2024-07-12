import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Feedback } from './components/Feedback';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/feedback" element={<Feedback></Feedback>} />
      </Routes>
    </Router>
  );
};

export default App;
