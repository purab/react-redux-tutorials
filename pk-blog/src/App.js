 import './App.css';
import Navbar from './components/Navbar';

function App() {  
  const title ='pk blog';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        
      </div>
    </div>
  );
}

export default App;
