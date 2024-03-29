import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Button, Typography, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDialog } from "./dialogs/context";
import { useRouter } from "next/router";
import { useRefreshToken } from "src/data/repository/auth";
import { deleteAuthResult, getAuthResult } from "src/data/session-storage";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  position: "relative",
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  const router = useRouter();
  const { showConfirmDialog } = useDialog();
  // const { mutate } = useRefreshToken();

  const { username, email } = getAuthResult();

  return (
    <>
      <DashboardNavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Typography sx={{ m: 1 }} variant="h7" style={{ color: "black" }}>
            Welcome, {username} 
          </Typography>
          <Typography sx={{ m: 1 }} variant="h7" style={{ color: "black" }}>
            {email}
          </Typography>
          {/* 로그아웃 */}
          <Button
            color="error"
            variant="contained"
            sx={{ mr: 1 }}
            onClick={() =>
              showConfirmDialog({
                title: "Log Out",
                message: "Are you sure you want to log out?",
                onConfirm: () => {
                  deleteAuthResult();
                  router.push("/");
                },
              })
            }
          >
            Log Out
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
  onSidebarOpen: PropTypes.func,
};
