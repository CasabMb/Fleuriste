import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import CompositionsPage from './Pages/CompositionsPage';
import LangagePage from './Pages/LangagePage';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from './Components/ScrollToTopButton';
import PopUpComponent from './Components/PopUpComponent';

function App() {
  return <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/CompositionsPage" element={<CompositionsPage />} />
      <Route path="/LangagePage" element={<LangagePage />} />
      
    </Routes>
    <FooterComponent />
    <ScrollToTopButton />
    <PopUpComponent/>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </BrowserRouter>
    </>;
}

export default App;
