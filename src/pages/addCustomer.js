import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Customers = () => (
  <>
    <Head>
      <title>
        Customers | MOCEAN
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
