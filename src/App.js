import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Form from './Form';
import Map from './Map';
import Hello from './Hello';
import Links from './Links';
import PageNotFound from './PageNotFound';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <Router>
        <Links />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/map" element={<Map />} />
          <Route exact path="/" element={<Hello />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
