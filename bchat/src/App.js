import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

function App() {
  return (
    <Router>
      {/* Wrap your routes with the <Routes> component */}
      <Routes>
        {/* Each route is wrapped by a <Route> component */}
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
