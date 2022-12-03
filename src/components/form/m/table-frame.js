import { Box, Typography, TableHead, Table, TableBody, Button } from "@mui/material";

const TableFrame = ({ title, maxWidth, onSave = () => {}, head, children: body }) => {
  return (
    <Box mt={4} mb={2}>
      <Typography variant="h5">{title}</Typography>
      <Table sx={{ maxWidth: maxWidth, mt: 2 }}>
        <TableHead>{head}</TableHead>
        <TableBody>{body}</TableBody>
      </Table>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "end",
          mt: 2,
        }}
      >
        <Button color="success" variant="contained" onClick={onSave}>
          Check
        </Button>
      </Box>
    </Box>
  );
};

export default TableFrame;
