import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './landingPage/LandingPageDescription';
import LandingPage from './landingPage/LandingPage';
import './App.css';
import Header from './common/components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <LandingPage leftGrowFlex={1} rightGrowFlex={1}>
        <LandingPageDescription />
        <DeskImage />
      </LandingPage>
    </>
  );
}

export default App;
