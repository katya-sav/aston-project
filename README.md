## <a id="status"></a> Project status

[![Beta](https://github.com/katya-sav/aston-project/actions/workflows/beta.yml/badge.svg)](https://github.com/katya-sav/aston-project/actions/workflows/beta.yml)
[![Production](https://github.com/katya-sav/aston-project/actions/workflows/production.yml/badge.svg)](https://github.com/katya-sav/aston-project/actions/workflows/production.yml)

# Anime Project

- Проект представляет собой приложение по поиску аниме
- Использовано API: [jikan](https://docs.api.jikan.moe/)
- Ссылка на проект: [Anime](https://aston-anime.vercel.app/)

## Функциональность

- **Регистрация и авторизация:**  пользователи могут создать учетную запись и авторизоваться в приложении
- **Поиск:** приложение предоставляет возможность поиска аниме
- **Избранное:**  пользователи могут добавлять в аниме избранное
- **История поиска:** приложение дает пользователям доступ к истории поиска

## Реализованные требования:

## 1 уровень (обязательный - необходимый минимум)

- [x] Реализованы Требования к функциональности

## React

- [x] Используются функциональные компоненты c хуками в приоритете над классовыми
- [x] Есть разделение на умные и глупые компоненты: [Умный](https://github.com/katya-sav/aston-project/blob/main/src/components/search-bar/search-bar.tsx), [Глупый](https://github.com/katya-sav/aston-project/blob/main/src/components/suggest-item/suggest-item.tsx)
- [x] Есть рендеринг списков: [AnimeList](https://github.com/katya-sav/aston-project/blob/main/src/components/anime-list/anime-list.tsx), [HystoryList](https://github.com/katya-sav/aston-project/blob/main/src/components/history-list/history-list.tsx)
- [x] Реализована хотя бы одна форма: [LoginPage](https://github.com/katya-sav/aston-project/blob/main/src/pages/login-page/login-page.tsx)
- [x] Есть применение Контекст API: [ThemeContext](https://github.com/katya-sav/aston-project/blob/main/src/shared/ui/theme/theme-context.ts), [ThemeProvider](https://github.com/katya-sav/aston-project/blob/main/src/shared/ui/theme/theme-provider.tsx)
- [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/katya-sav/aston-project/blob/main/src/components/error-boundary/error-boundary.tsx), [ErrorFallback](https://github.com/katya-sav/aston-project/blob/main/src/components/error-fallback/error-fallback.tsx)
- [x] Есть хотя бы один кастомный хук: [useFavorites](https://github.com/katya-sav/aston-project/blob/main/src/hooks/use-favorites.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [FavoritesButton](https://github.com/katya-sav/aston-project/blob/main/src/components/favorites-button/favorites-button.tsx), [HistoryItem](https://github.com/katya-sav/aston-project/blob/main/src/components/history-item/history-item.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce): [useDeboounce](https://github.com/katya-sav/aston-project/blob/main/src/hooks/use-debounce.ts), [SearchBar](https://github.com/katya-sav/aston-project/blob/main/src/components/search-bar/search-bar.tsx)
- [x] Есть применение [lazy](https://github.com/katya-sav/aston-project/blob/main/src/App.tsx) + [Suspense](https://github.com/katya-sav/aston-project/blob/main/src/components/loader/loader.tsx)

## Redux

- [x] Используем Modern Redux with Redux Toolkit: [store](https://github.com/katya-sav/aston-project/blob/main/src/store/store.ts)
- [x] Используем слайсы: [authUser](https://github.com/katya-sav/aston-project/blob/main/src/store/slices/auth-user/auth-user.ts)
- [x] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [middleware](https://github.com/katya-sav/aston-project/blob/main/src/store/middleware.ts)
- [x] Используется RTK Query: [animeApi](https://github.com/katya-sav/aston-project/blob/main/src/api/anime-api/anime-api.ts)
- [x] Используется Transforming Responses: [animeApi](https://github.com/katya-sav/aston-project/blob/main/src/api/anime-api/anime-api.ts), [transformAnimeData](https://github.com/katya-sav/aston-project/blob/main/src/store/transform/transform-anime-data.ts)

## 2 уровень (необязательный)

- [x] Используется [TypeScript](https://github.com/katya-sav/aston-project/blob/main/tsconfig.json)
- [x] Используется Firebase: [firebaseApi](https://github.com/katya-sav/aston-project/blob/main/src/api/firebase-api/firebase-api.ts)
- [x] Настроен CI/CD:
  - [x] Настроен CI: [CI](https://github.com/katya-sav/aston-project/blob/main/.github/workflows/production.yml)
    - [x] [Readme Status Badge](#status)
    - [x] Проверки Eslint, TS, build
  - [x] Настроен CD: [Deploy Link](https://aston-anime.vercel.app/)
- [x] Используются мемоизированные селекторы: [selectIsAnimeInFavorites](https://github.com/katya-sav/aston-project/blob/main/src/store/slices/favorites/selectors.ts), применение:[useIsFavorites](https://github.com/katya-sav/aston-project/blob/main/src/hooks/use-favorites.ts).
selectIsAnimeInFavorites - мемоизированный селектор, созданный для проверки, находится ли аниме в избранном. Если данные о списке аниме в сторе и id аниме не изменились, то селектор возвращает мемоизированное значение


## Дополнительная информация

- [x] Использованы [css-modules](https://github.com/katya-sav/aston-project/blob/main/src/components/anime-show/anime-show.module.css)
- [x] Использован [Font Awesome Icons](https://github.com/katya-sav/aston-project/blob/main/src/components/buttons-panel/buttons-panel.tsx)
- [x] Использован [react-error-boundary](https://github.com/katya-sav/aston-project/blob/main/src/components/error-boundary/error-boundary.tsx)
- [x] Использован [nanoid](https://github.com/katya-sav/aston-project/blob/main/src/store/slices/history/thunks.ts)
