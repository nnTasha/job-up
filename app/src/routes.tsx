import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import PublicLayout from './layout/publicLayout/PublicLayout';
import AuthForm from './authForm/AuthForm';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<AuthForm />} />
        <Route path="signin" element={<AuthForm />} />
      </Route>
    </>
  )
);
