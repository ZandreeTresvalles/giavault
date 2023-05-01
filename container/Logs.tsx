import { Box, CssBaseline } from "@mui/material";
import { FC } from "react";
import { SideDrawer } from "@components/Drawer";
import TableContainer from "@containers/TableContainer";
import { Logs as LogType } from "@typedefs/logs";
import { TableTypes } from "@typedefs/components/Table.type";

interface ILogsContainer {
  data: LogType[];
}

export const LogsContainer: FC<ILogsContainer> = ({ data }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideDrawer />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <TableContainer placeholder="Search by username, role, ip, action, or method" data={data} type={TableTypes.LOGS} />
      </Box>
    </Box>
  );
};