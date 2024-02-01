
import './App.css';
import './components/style/modal.css'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Main from './components/Main'
import About from './components/About';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='/' element={<Main></Main>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Menu></Menu>}></Route>
      <Route path='/signup' element={<Menu></Menu>}></Route>
      </Routes>
    </div>
  );
}

export default App;
