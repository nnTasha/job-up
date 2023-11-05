import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './components/LandingPageDescription';
import LandingPage from './containers/LandingPage';
import './App.css';

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
