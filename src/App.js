import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <h2>Ofertas de la semana</h2>
      <ItemListContainer/>
    </div>
  );
}

export default App;
