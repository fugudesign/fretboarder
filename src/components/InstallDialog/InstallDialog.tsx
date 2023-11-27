import {
  AddBoxOutlined,
  InstallMobile,
  IosShare,
  MoreVert,
} from '@mui/icons-material';
import {
  Avatar,
  AvatarProps,
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Children, ReactNode } from 'react';
import { useInstallPrompt } from 'src/hooks/useInstallPrompt';
import pkg from '../../../package.json';

type InstallDialogProps = DialogProps & {
  onClose?: () => void;
};

type InstructionStep = {
  primary: ReactNode;
  secondary: ReactNode;
};

type Instructions = {
  iconVariant: AvatarProps['variant'];
  text: ReactNode;
  steps: InstructionStep[];
};

type DevicesInstructions = Record<string, Instructions>;

const devicesInstructions: DevicesInstructions = {
  ios: {
    iconVariant: 'rounded',
    text: 'How to install on IOS',
    steps: [
      {
        primary: 'Click on the share icon',
        secondary: <IosShare />,
      },
      {
        primary: 'Then click on',
        secondary: (
          <Stack direction="row" alignItems="center" gap={2}>
            Add on homescreen <AddBoxOutlined />
          </Stack>
        ),
      },
    ],
  },
  android: {
    iconVariant: 'circular',
    text: 'How to install on Android',
    steps: [
      {
        primary: 'Click on the menu',
        secondary: <MoreVert />,
      },
      {
        primary: 'Then click on',
        secondary: (
          <Stack direction="row" alignItems="center" gap={2}>
            <InstallMobile /> Install
          </Stack>
        ),
      },
    ],
  },
};

const InstallDialog = ({
  open,
  onClose,
  ...dialogProps
}: InstallDialogProps) => {
  const appName = pkg.displayName;
  const { isIOS, isPromptable } = useInstallPrompt();

  const instructions: Instructions =
    devicesInstructions?.[isIOS ? 'ios' : 'android'];

  return (
    <Dialog
      {...dialogProps}
      open={open && isPromptable}
      onClose={onClose}
      PaperProps={{ sx: { overflow: 'visible' } }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
        }}
        component="div"
      >
        <Avatar
          src="/icons/manifest-icon-512.maskable.png"
          variant={instructions.iconVariant}
          sx={{ width: 50, height: 50, mt: -5 }}
        />
        <Typography variant="h5">{appName}</Typography>
      </DialogTitle>
      <DialogContent sx={{ maxWidth: 400 }}>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          mt={0}
          mb={2}
        >
          {instructions.text}
        </Typography>
        <List sx={{ py: 0 }}>
          {Children.toArray(
            instructions.steps?.map((step: InstructionStep, i) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      fontSize: '1em',
                      lineHeight: '1em',
                      bgcolor: 'text.disabled',
                      color: 'text.primary',
                    }}
                  >
                    {i + 1}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={step.primary}
                  primaryTypographyProps={{
                    component: 'div',
                    variant: 'body2',
                    color: 'text.secondary',
                  }}
                  secondaryTypographyProps={{
                    component: 'div',
                    sx: { color: 'text.primary' },
                  }}
                  secondary={step.secondary}
                />
              </ListItem>
            ))
          )}
        </List>
        <Stack sx={{ mt: 2 }} direction="row" justifyContent="center" gap={2}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={onClose}
          >
            Ok, thanks
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default InstallDialog;
