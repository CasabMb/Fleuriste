import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';

function App() {
  return <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>;
}

export default App;
