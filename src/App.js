import './App.css';
import Navbar from './components/navbar/Navbar';
import All from './components/all/All';
import Mens from './components/mens/Mens';
import Womens from './components/womens/Womens';
import Home from './components/home/Home';
import About from './components/about/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/mens' element={<Mens/>}  />
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
