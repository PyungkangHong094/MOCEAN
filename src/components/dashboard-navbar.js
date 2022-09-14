import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Button, Typography, Box, IconButton, Toolbar,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            sx={{ m: 1 }}
            variant="h7"
            style={{color: 'black'}}
            
          >
            반갑습니다, pkhong 님
          </Typography>
          <Typography
            sx={{ m: 1 }}
            variant="h7"
            style={{color: 'black'}}
            
          >
            pyungkangHong@test.com
          </Typography>
          {/* 로그아웃 */}
          <Button
            color="error"
            variant="contained"
            sx={{ mr: 1 }}
          >
            로그아웃
          </Button>
          
          
          {/* <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar> */}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
