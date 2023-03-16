import Box from '@mui/material/Box';
import { FC } from 'react';
import Neck from './components/Neck';
import sx from './Viewer.styles';
import { useAppContext } from 'src/contexts/appContext';

const Viewer: FC = () => {
  const { type } = useAppContext();

  return (
    <Box className="viewer" sx={sx.root}>
      <Neck type={type} />
    </Box>
  );
};

export default Viewer;
