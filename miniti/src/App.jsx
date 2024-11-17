import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Footnote from './components/Footnote/Footnote';
import mens_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Category banner={mens_banner} category="men"/>}/>
      <Route path='/womens' element={<Category banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Category banner={kid_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footnote/>
    </BrowserRouter>
    </ShopProvider>

  );
}

export default App;
