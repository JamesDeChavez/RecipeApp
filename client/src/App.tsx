import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
