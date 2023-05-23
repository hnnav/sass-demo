import './App.scss'
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
        <Mainpage />
      </header>
    </div>
  );
}

export default App;
