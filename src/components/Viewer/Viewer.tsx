import Box from '@mui/material/Box';
import { FC } from 'react';
import Neck from './components/Neck';
import Scale from './components/Scale';
import sx from './Viewer.styles';

const Viewer: FC = () => {
  return (
    <Box className="viewer" sx={sx.root}>
      <Neck />
      <Scale />
    </Box>
  );
};

export default Viewer;
