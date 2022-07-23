import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PageTwo from './pages/PageTwo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/pagetwo' element={<PageTwo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
