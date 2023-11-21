import { Outlet } from 'react-router-dom';
import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './landingPage/LandingPageDescription';
import LandingPage from './landingPage/LandingPage';
import './App.css';

function App() {
  return (
    <>
      <LandingPage leftGrowFlex={1} rightGrowFlex={1}>
        <LandingPageDescription />
        <DeskImage />
      </LandingPage>
      <Outlet />
    </>
  );
}

export default App;
