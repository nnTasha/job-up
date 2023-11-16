import { Box, Chip, Typography } from '@mui/material';
import { labelStyles } from './styles';

const Label = () => {
  return (
    <Box display="flex" alignItems="center">
      <Chip sx={labelStyles.chip} label="JT" color="primary" />
      <Typography variant="h4" component="div" sx={labelStyles.title}>
        JobGet
      </Typography>
    </Box>
  );
};

export default Label;
