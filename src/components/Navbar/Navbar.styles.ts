import { Theme } from '@mui/material';

export default {
  root: {},
  button: {
    '&.active': {
      '&:after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        left: (theme: Theme) => theme.spacing(1),
        right: (theme: Theme) => theme.spacing(1),
        marginTop: '1em',
        height: '1px',
        background: '#FFF',
      },
    },
  },
} as Sxs;
