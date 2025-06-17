import Header from './components/Header';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="mwilso17" />
    </div>
  );
}

export default App;
