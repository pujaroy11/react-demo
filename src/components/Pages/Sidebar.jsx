import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router';
import dashboard_bg from "../../Assets/dashboard.png"
import udise_bg from "../../Assets/udise.png"
import pm_poshan_bg from "../../Assets/PM-Poshan.png"
import pgi_bg from "../../Assets/Performance_Grading_Index.png"
import nistha_bg from "../../Assets/nistha.png"
import nas_bg from "../../Assets/research.png"
import diksha_bg from "../../Assets/diksha_logo.avif"
import setting_bg from "../../Assets/settings.png"
// import { useAppStore } from '../../appStore';
import { useAppStore } from '../../appStore';

const drawerWidth = 190;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const open = useAppStore((state) => state.dopen);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <Box height={70} />


        <List>
          {/* dashboard */}
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/dashboard') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={dashboard_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />


            </ListItemButton>

          </ListItem>


          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/udise') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={udise_bg} alt="Dashboard" style={{ height: '14px', width: '28px' }} />
              </ListItemIcon>
              <ListItemText primary="Udise +" sx={{ opacity: open ? 1 : 0 }} />


            </ListItemButton>

          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/pgi') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={pgi_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="PGI" sx={{ opacity: open ? 1 : 0 }} />

            </ListItemButton>

          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/pmposhan') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={pm_poshan_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="PM poshan" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/nistha') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={nistha_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="Nistha" sx={{ opacity: open ? 1 : 0 }} />


            </ListItemButton>

          </ListItem>



          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/nas') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={nas_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="Nas" sx={{ opacity: open ? 1 : 0 }} />


            </ListItemButton>

          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/diksha') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={diksha_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="Diksha" sx={{ opacity: open ? 1 : 0 }} />

            </ListItemButton>

          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate('/setting') }} >
            <ListItemButton

              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}

              >
                <img src={setting_bg} alt="Dashboard" style={{ height: '25px', width: '25px' }} />
              </ListItemIcon>
              <ListItemText primary="Setting" sx={{ opacity: open ? 1 : 0 }} />


            </ListItemButton>

          </ListItem>

        </List>

      </Drawer>

    </Box>
  );
}
