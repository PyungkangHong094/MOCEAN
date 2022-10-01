import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { CustomerToolbar } from "src/components/customer/customer-toolbar";
import { DashboardLayout } from '../../components/dashboard-layout';

const CustomerDetail = ({ cid }) => {
    const router = useRouter()


    return (
        <>
            <Head>
                <title>
                    Customer Detail | MOCEAN
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: "column",
                }}
            >
                <CustomerToolbar
                    name={'Joshua Park'}
                    datetime={'2022-10-01 16:30'}
                    email={'joshuapark@gmail.com'} />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        flex: 1,
                    }}>
                    <Typography>
                        Customer ID: {cid}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

CustomerDetail.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export function getServerSideProps({ params }) {
    return {
        props: { cid: params.cid }
    };
}

export default CustomerDetail;