import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './modules/landingPage/LandingPageDescription';
import LandingPage from './modules/landingPage/LandingPage';
import './App.css';

function App() {
  return (
    <LandingPage leftGrowFlex={1} rightGrowFlex={1}>
      <LandingPageDescription />
      <DeskImage />
    </LandingPage>
  );
}

export default App;
