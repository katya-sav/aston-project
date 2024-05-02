import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { AnimeCard } from './components/AnimeCard';

import './GlobalStyles.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<AnimeCard />} />
      </Routes>
    </>
  );
};
