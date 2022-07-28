import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PageTwo from './pages/PageTwo';
import AmazonPage from './pages/AmazonAPI';
import HomePage2 from './pages/Home2';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Contents from './pages/Contents';
import './App.css';
import NewRecipe from './pages/NewRecipe';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage2/>}></Route>
        <Route path='/pagetwo' element={<PageTwo/>}></Route>
        <Route path='/register' element={<RegisterUser/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route path='/contents' element={<Contents/>}></Route>
        <Route path='/amazon' element={<AmazonPage/>}></Route>
        <Route path='/newrecipe' element={<NewRecipe/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
