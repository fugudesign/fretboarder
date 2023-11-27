import { InstallMobile } from '@mui/icons-material';
import { Button, ButtonProps } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import { useInstallPrompt } from 'src/hooks/useInstallPrompt';

import InstallDialog from '../InstallDialog/InstallDialog';

type InstallButtonProps = PropsWithChildren & ButtonProps;

const InstallButton = ({ children, ...buttonProps }: InstallButtonProps) => {
  const { isPromptable } = useInstallPrompt();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isPromptable ? (
    <>
      <Button
        startIcon={<InstallMobile />}
        onClick={handleOpen}
        {...buttonProps}
      >
        {children}
      </Button>
      <InstallDialog open={open} onClose={handleClose} />
    </>
  ) : null;
};

export default InstallButton;
