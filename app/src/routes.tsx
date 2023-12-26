import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';

import AuthPage from './authPage/AuthPage';
import UserProfile from './userProfile/UserProfile';
import PublicLayout from './layout/PublicLayout/PublicLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<AuthPage />} />
        <Route path="signin" element={<AuthPage />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Route>
    </>
  )
);
