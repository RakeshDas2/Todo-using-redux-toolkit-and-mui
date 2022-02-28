import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import TableComponent from './components/TableComponent';
import ModalComponent from './components/ModalComponent';

function App() {
  return (
    <div className="App">
     <HomeComponent/>
     <TableComponent/>
     <ModalComponent/>
    </div>
  );
}

export default App;
