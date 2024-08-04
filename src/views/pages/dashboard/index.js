import React from "react";
import {
  Grid,
  Typography,
  Stack,
  Card,
  IconButton,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  Rating,
  Divider,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowDropUp, KeyboardArrowRight } from "@mui/icons-material";
import {
  cardItemList,
  chartData,
  activityList,
  tableData,
  statusStyles,
  customerFeedbackList,
} from "../../../helpers/constants/dashboardConstant";

// css file
import "./dashboard.scss";

const CustomTable = () => {
  return (
    <TableContainer className="table_container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="head_table_cell">Customer</TableCell>
            <TableCell className="head_table_cell">Order No.</TableCell>
            <TableCell className="head_table_cell">Amount</TableCell>
            <TableCell className="head_table_cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.orderNo}>
              <TableCell>
                <Stack direction="row" alignItems="center" spacing="4px">
                  <Avatar
                    alt={row.name}
                    src={`https://i.pravatar.cc/300?u=${row.name}`}
                  />
                  <Typography variant="body1" whiteSpace="nowrap">
                    {row.name}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <span style={statusStyles[row.status]}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...props}
        size={70}
        thickness={4}
      />
      <Box
        top={"50%"}
        left={"50%"}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <Typography fontSize="8px" color="textSecondary">
          {`${Math.round(props.value)}%`} Goal Completed
        </Typography>
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Stack padding="16px" className="dashboard_container">
      <Typography fontSize="20px" fontWeight="500" mb="8px">
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* card item section */}
        {cardItemList.map((item, index) => (
          <Grid item key={index} lg={2} md={4} sm={4} xs={12}>
            <Card sx={{ padding: "16px" }}>
              <IconButton
                sx={{ ml: "-6px", mb: "2px", bgcolor: "rgba(0,0,0,0.09)" }}
              >
                {item["icon"]}
              </IconButton>
              <Typography>{item["heading"]}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography fontSize="18px" fontWeight="500">
                  {item["count"]}
                </Typography>
                <Stack direction="row" alignItems="center">
                  {item["countIcon"]}
                  <Typography fontSize="12px">
                    {item["countPercentage"]}%
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}

        {/* net worth card  */}
        <Grid item lg={4} md={8} sm={8} xs={12}>
          <Card sx={{ padding: "16px" }}>
            <Stack direction="row">
              <Box flexGrow={1}>
                <Typography color="rgba(0, 0, 0, 0.4)" fontSize="10px">
                  Net Profit
                </Typography>
                <Typography fontSize="32px">$ 6759.25</Typography>
                <Stack direction="row" alignItems="center" ml="-4px">
                  <ArrowDropUp color="success" />
                  <Typography fontSize="12px">3%</Typography>
                </Stack>
              </Box>
              <Box margin="auto" position="relative">
                <CircularProgressWithLabel value={70} />
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* bar graph card */}
        <Grid item mt="16px" lg={8} md={6} xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Activity</Typography>
            <ResponsiveContainer width={"100%"} height={240}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        {/* activity card */}
        <Grid item mt="16px" lg={4} md={6} xs={12}>
          <Card sx={{ padding: "16px" }}>
            <Stack spacing="74px">
              {activityList.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  className={index !== 0 ? "mt_32" : ""}
                >
                  <Stack direction="row" spacing="8px" alignItems="center">
                    <IconButton className="icon_bg_color">
                      {item["icon"]}
                    </IconButton>
                    <Typography>{item["heading"]}</Typography>
                  </Stack>
                  <IconButton className="icon_bg_color" sx={{ p: "4px" }}>
                    <KeyboardArrowRight fontSize="small" />
                  </IconButton>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>

        {/* table card */}
        <Grid item lg={8} md={8} xs={12}>
          <Card sx={{ p: "16px" }}>
            <Typography variant="h6">Recent Orders</Typography>
            <Box mt="16px">
              <CustomTable />
            </Box>
          </Card>
        </Grid>

        {/* customer feedback card */}
        <Grid item lg={4} md={4} xs={12}>
          <Card sx={{ p: "16px" }}>
            <Typography variant="h6">Customer's Feedback</Typography>
            <Stack
              mt="16px"
              spacing="16px"
              sx={{ maxHeight: "384px", overflowY: "auto" }}
            >
              {customerFeedbackList.map((item, index) => (
                <>
                  <Box key={index}>
                    <Stack direction="row" alignItems="center" spacing="8px">
                      <Avatar
                        alt={item["name"]}
                        src={`https://i.pravatar.cc/300?u=${item["name"]}`}
                      />
                      <Typography>{item["name"]}</Typography>
                    </Stack>
                    <Box pl="12px" mt="4px">
                      <Rating size="small" value={4} />
                      <Typography fontSize="13px">{item["content"]}</Typography>
                    </Box>
                  </Box>
                  {index !== customerFeedbackList.length - 1 && <Divider />}
                </>
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
