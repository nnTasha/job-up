import DeskImage from '../src/assets/desk.svg?react';
import LandingPageDescription from './landingPage/LandingPageDescription';
import LandingPage from './landingPage/LandingPage';
import './App.css';
import { SvgIcon } from '@mui/material';

function App() {
  return (
    <LandingPage
      description={<LandingPageDescription />}
      content={
        <SvgIcon
          component={DeskImage}
          inheritViewBox
          sx={{ width: '100%', height: '100%' }}
        />
      }
    />
  );
}

export default App;
