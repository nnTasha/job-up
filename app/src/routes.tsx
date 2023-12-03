import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AuthForm from './authForm/AuthForm';
import App from './App';
import PublicLayout from './layout/publicLayout/PublicLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<AuthForm title="Sign Up" />} />
        <Route path="signin" element={<AuthForm title="Sign In" />} />
      </Route>
    </>
  )
);
