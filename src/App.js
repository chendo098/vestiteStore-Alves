import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/products/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
