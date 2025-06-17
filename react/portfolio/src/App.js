import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo} />
        <Routes>
          <Route
            path='/'
            element={<Profile userName="mwilso17" />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
