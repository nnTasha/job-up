import { Box, Chip, Typography } from '@mui/material';

const Label = () => {
  return (
    <Box display="flex" alignItems="center">
      <Chip
        sx={{
          height: '2rem',
          width: 'auto',
          borderRadius: '15%',
          paddingX: '0',
          paddingY: '0',
          fontSize: '1.5rem',
          fontWeight: '500',
          marginRight: '0.5rem',
        }}
        label="JT"
        color="primary"
      />
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: '700', marginLeft: '0.5rem' }}
      >
        JobGet
      </Typography>
    </Box>
  );
};

export default Label;
