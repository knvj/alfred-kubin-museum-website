import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import VisitSection from './components/VisitSection';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}> </Route>
      </Routes>
    </Router>
    <VisitSection />
    </>

  );
}

export default App;
