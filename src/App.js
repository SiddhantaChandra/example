import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FOF from './components/FOF';
import Products from './components/Products';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="*" element={<FOF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
