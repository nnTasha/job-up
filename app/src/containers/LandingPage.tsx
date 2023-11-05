import { FC, ReactElement, ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface LandingPageProps {
  children: ReactNode;
  leftGrowFlex: number;
  rightGrowFlex: number;
}

const LandingPage: FC<LandingPageProps> = ({
  leftGrowFlex = 1,
  rightGrowFlex = 1,
  children,
}) => {
  const [description, deskImage] = children as ReactElement[];

  return (
    <Container sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: { leftGrowFlex } }}>{description}</Box>
      <Box sx={{ flexGrow: { rightGrowFlex } }}>{deskImage}</Box>
    </Container>
  );
};

export default LandingPage;
