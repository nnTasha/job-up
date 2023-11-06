import { FC, ReactElement, ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)<{ flexGrow: number }>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  (props) => ({
    flexGrow: props.flexGrow,
  })
);

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
