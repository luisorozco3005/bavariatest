import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import Country from './pages/Country';
import Header from './components/Header';
import { shallowEqual, useSelector } from "react-redux";
import { useEffect } from 'react';

function App() {

  const theme: ITheme = useSelector((state: ThemeState) => state.theme, shallowEqual);

  useEffect(() => {
    if (theme.dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/country/:countryCode" element={<Country />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
