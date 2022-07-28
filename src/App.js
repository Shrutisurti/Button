import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
//  import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
     <Button variant="primary" className="props">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
    </div>
  );
}

export default App;
