import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
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
                    py: 8
                }}
            >
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