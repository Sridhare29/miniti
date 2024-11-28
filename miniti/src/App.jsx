import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BookRequest from './pages/BookRequest';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/erorr' element={<NotFound/>}/>
      <Route path='/request' element={<BookRequest/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
