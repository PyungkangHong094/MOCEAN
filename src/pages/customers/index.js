import Head from "next/head";
import { Box, CircularProgress, Container } from "@mui/material";
import { CustomerList } from "../../components/customer/customer-list-results";
import { CustomerListToolbar } from "../../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useAllUsers } from "src/data/repository/users";

const Customers = () => {
  const { data, isLoading, isError } = useAllUsers();

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
            {isLoading ? (
              <CircularProgress />
            ) : isError ? null : (
              <CustomerList customers={data.items} />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
