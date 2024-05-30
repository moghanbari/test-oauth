// import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MenuBar from './components/shared-modules/menu-bar/MenuBar';
import Footer from './components/shared-modules/footer/Footer';
import Login from './components/pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
