import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import CompositionsPage from './Pages/CompositionsPage';

function App() {
  return <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/CompositionsPage" element={<CompositionsPage />} />
      
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>;
}

export default App;
