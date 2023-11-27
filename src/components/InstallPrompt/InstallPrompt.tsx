/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import { AddBoxOutlined, InstallMobile, IosShare } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import sx from './InstallPrompt.styles';

const InstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setIsIOS(true);
    }
    if ('standalone' in window.navigator && window.navigator.standalone) {
      setIsStandalone(true);
    }
  }, []);

  return isIOS && !isStandalone ? (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<InstallMobile />}
        onClick={handleOpen}
      >
        Install
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={sx.root}
        PaperProps={{ sx: sx.paper }}
      >
        <DialogTitle sx={sx.title} component="div">
          <Avatar src="/icons/favicon-196.png" sx={sx.icon} />
          <Typography variant="h5">Fretboarder</Typography>
          <Typography color="grey.500">How to install</Typography>
        </DialogTitle>
        <DialogContent sx={sx.content}>
          <List sx={sx.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 30, height: 30 }}>1</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Click on the share icon."
                primaryTypographyProps={{ component: 'div' }}
                secondaryTypographyProps={{ component: 'div' }}
                secondary={<IosShare />}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 30, height: 30 }}>2</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Then click on"
                primaryTypographyProps={{ component: 'div' }}
                secondaryTypographyProps={{ component: 'div' }}
                secondary={
                  <Stack direction="row" alignItems="center" gap={2}>
                    Add to homescreen <AddBoxOutlined />
                  </Stack>
                }
              />
            </ListItem>
          </List>
          <Stack
            sx={sx.actions}
            direction="row"
            justifyContent="center"
            gap={2}
          >
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              Ok, thanks
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  ) : null;
};

export default InstallPrompt;
