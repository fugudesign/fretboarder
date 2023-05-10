import { Theme } from '@mui/material';
import { noteSize } from '../Viewer/components/NoteMark';

export default {
  root: {
    '& .scroller': {
      overflow: 'hidden',
      py: 0,
      position: 'relative',
      '&: after': {
        content: "''",
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '100px',
        zIndex: 10,
        background: (theme: Theme) =>
          `linear-gradient(to right, ${theme.palette.background.default}00, ${theme.palette.background.default}FF)`,
      },
    },
  },
  mobileAdapt: {
    overflowX: 'hidden',
    '.scroller &': {
      overflowX: 'auto',
    },
    '&.viewerAdapt': {
      pt: 0,
      pb: 8,
      '&:not(.isSm)': {
        pb: 2,
        '& .viewer': {
          transformOrigin: 'top left',
          transform: 'scale(0.8)',
        },
      },
    },
    '&.scaleSchemaAdapt': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '&:not(.isSm)': {
        '& .scaleSchema .noteMark': {
          width: noteSize * 0.5,
          height: noteSize * 0.5,
          fontSize: noteSize * 0.5,
        },
      },
    },
  },
} as Sxs;
