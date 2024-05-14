import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from './components/error-boundary';
import { Loader } from './components/loader';
import { ThemeProvider } from './shared/ui/theme';

const Header = lazy(() => import('./components/header'));
const MainPage = lazy(() => import('./pages/main-page'));
const CardPage = lazy(() => import('./pages/card-page'));
const SearchPage = lazy(() => import('./pages/search-page'));
const FavoritesPage = lazy(() => import('./pages/favorites-page'));
const HistoryPage = lazy(() => import('./pages/history-page'));
const Login = lazy(() => import('./components/login'));
const Register = lazy(() => import('./components/register'));
const PageNotFound = lazy(() => import('./pages/page-not-found'));
const AuthRoute = lazy(() => import('./pages/auth-route'));
const ProtectedRoute = lazy(() => import('./pages/protected-route'));

import './global-styles.css';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/search/:searchQuery/" element={<SearchPage />} />
            <Route path="/signin" element={<AuthRoute page={<Login />} />} />
            <Route path="/signup" element={<AuthRoute page={<Register />} />} />
            <Route
              path="/favorites"
              element={<ProtectedRoute page={<FavoritesPage />} />}
            />
            <Route
              path="/history"
              element={<ProtectedRoute page={<HistoryPage />} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
};
