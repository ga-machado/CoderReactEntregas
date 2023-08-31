import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemCount from './components/ItemCount/ItemCount.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <div>
      <NavBar />
      <ItemCount />
      <ItemListContainer />
    </div> 
  );
}

export default App;
