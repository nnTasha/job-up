import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './landingPage/LandingPageDescription';
import LandingPage from './landingPage/LandingPage';
import './App.css';

function App() {
  return (
    <>
      <LandingPage
        description={<LandingPageDescription />}
        content={<DeskImage />}
      />
    </>
  );
}

export default App;
