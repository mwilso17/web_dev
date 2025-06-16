import ReactDOM from 'react-dom/client';

 function App() {
  return <h1>This is a test.</h1>;
 }

 const container = document.getElementById('app');

 const root = ReactDOM.createRoot(container);

 root.render(<App />);