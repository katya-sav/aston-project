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
const LoginPage = lazy(() => import('./pages/login-page'));
const RegisterPage = lazy(() => import('./pages/register-page'));
const PageNotFound = lazy(() => import('./pages/page-not-found'));
const AuthRoute = lazy(() => import('./routes/auth-route'));
const ProtectedRoute = lazy(() => import('./routes/protected-route'));

import './global-styles.css';

export const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/search/:searchQuery/" element={<SearchPage />} />
            <Route
              path="/signin"
              element={<AuthRoute page={<LoginPage />} />}
            />
            <Route
              path="/signup"
              element={<AuthRoute page={<RegisterPage />} />}
            />
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
      </Suspense>
    </ThemeProvider>
  );
};
