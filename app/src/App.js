import logo from './logo.svg';
import ContactUs from './components/Contactme';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <ContactUs />
      </Container>
    </div>
  );
}

export default App;
