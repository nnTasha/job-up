import { FC, ReactElement, ReactNode } from 'react';
import { Container } from '@mui/material';
import { StyledBox } from './styles';

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
      <StyledBox flexGrow={leftGrowFlex}>{description}</StyledBox>
      <StyledBox flexGrow={rightGrowFlex}>{deskImage}</StyledBox>
    </Container>
  );
};

export default LandingPage;
