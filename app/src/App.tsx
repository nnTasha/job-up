import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './landingPage/LandingPageDescription';
import LandingPage from './landingPage/LandingPage';
import PublicLayout from './layout/PublicLayout/PublicLayout';
import './App.css';

function App() {
  return (
    <PublicLayout>
      <LandingPage leftGrowFlex={1} rightGrowFlex={1}>
        <LandingPageDescription />
        <DeskImage />
      </LandingPage>
    </PublicLayout>
  );
}

export default App;
