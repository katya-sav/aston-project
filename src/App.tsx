import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { CardPage } from './pages/CardPage';

import './GlobalStyles.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </>
  );
};
