import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)<{ flexGrow: number }>(
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
