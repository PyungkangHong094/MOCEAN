import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerList } from "../../components/customer/customer-list-results";
import { CustomerListToolbar } from "../../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useAllUsers } from "src/data/repository/users";

const Customers = () => {
  // const { status, data } = useAllUsers();
  // console.log(status, data);
  return (
    <>
      <Head>
        <title>Customers | MOCEAN</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
