import { grey } from '@mui/material/colors';

export default {
  root: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: 'inherit',
    padding: 0,
    mb: 1,
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
      top: '21%',
      height: '1px',
      borderBottom: '1px solid',
      borderColor: grey[800],
      '.scaleSchema:not(.isSm) &': {
        top: '20%',
      },
    },
  },
} as Sxs;
