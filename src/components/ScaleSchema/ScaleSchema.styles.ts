import { grey } from '@mui/material/colors';

export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    fontSize: 'inherit',
  },
  note: {
    color: grey[400],
    '&.disabled': {
      color: grey[800],
    },
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  connector: {
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: '20px',
      height: '1px',
      borderBottom: '1px solid white',
    },
  },
} as Sxs;
