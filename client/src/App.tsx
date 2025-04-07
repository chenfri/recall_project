import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecallPage from '@/pages/RecallPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Recall Data Visualization</h1>
        </header>
        
        <main className="app-content">
          <Routes>
            <Route path="/" element={<RecallPage />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Recall Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 