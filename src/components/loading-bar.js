const { Box, CircularProgress } = require("@mui/material");

const LoadingBar = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", mt: 3, justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingBar;
