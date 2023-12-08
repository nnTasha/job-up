import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import PublicLayout from './layout/publicLayout/PublicLayout';
import AuthPage from './authPage/AuthPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<AuthPage />} />
        <Route path="signin" element={<AuthPage />} />
      </Route>
    </>
  )
);
