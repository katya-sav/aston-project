import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header';
import { MainPage } from './pages/main-page';
import { CardPage } from './pages/card-page';
import { SearchPage } from './pages/search-page';
import { Login } from './components/login';
import { Register } from './components/register';
import { AuthRoute } from './pages/auth-route';

import './global-styles.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/search/:searchQuery/" element={<SearchPage />} />
        <Route path="/signin" element={<AuthRoute page={<Login />} />} />
        <Route path="/signup" element={<AuthRoute page={<Register />} />} />
      </Routes>
    </>
  );
};
