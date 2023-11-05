import './App.css';

import LandingPageDescription from './components/LandingPageDescription';
import DeskImage from '../src/assets/desk.svg?react';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <>
      <LandingPage leftGrowFlex={1} rightGrowFlex={1}>
        <LandingPageDescription />
        <DeskImage />
      </LandingPage>
    </>
  );
}

export default App;
