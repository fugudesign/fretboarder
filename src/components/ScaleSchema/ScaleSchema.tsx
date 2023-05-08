import { Interval, chromaticHTI } from 'src/config/modes';

import Box from '@mui/material/Box';
import { Children } from 'react';
import IconButton from '@mui/material/IconButton';
import NoteMark from '../Viewer/components/NoteMark';
import Tooltip from '@mui/material/Tooltip';
import { grey } from '@mui/material/colors';
import sx from './ScaleSchema.styles';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

const ScaleSchema = () => {
  const { modeIntervals } = useAppContext();
  const intervalsHTI = Object.keys(chromaticHTI) as Interval[];

  const getHTI = (interval: Interval) => {
    const index = intervalsHTI.indexOf(interval);
    return chromaticHTI[interval] - chromaticHTI[intervalsHTI[index - 1]];
  };

  return (
    <Box sx={sx.root}>
      {Children.toArray(
        intervalsHTI.map((interval, index) => (
          <>
            {!!index && (
              <Box sx={{ ...sx.connector, flex: getHTI(interval) }} />
            )}
            <Box sx={{ ...sx.step }}>
              <Tooltip title={wording.intervals[interval]}>
                <IconButton sx={sx.button}>
                  <NoteMark
                    interval={interval}
                    emptyString
                    sx={{
                      ...(!modeIntervals.includes(interval)
                        ? {
                            '&.emptyString': {
                              color: grey[800],
                              bgcolor: 'transparent',
                              border: `2px solid`,
                              borderColor: grey[800],
                            },
                          }
                        : {}),
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </>
        ))
      )}
    </Box>
  );
};

export default ScaleSchema;
