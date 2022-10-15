import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { CustomerMenu } from "src/components/customer/customer-menu";
import { CustomerToolbar } from "src/components/customer/customer-toolbar";
import RatingBar from "src/components/rating/rating-bar";
import RatingContainer from "src/components/rating/rating-container";
import { DashboardLayout } from '../../components/dashboard-layout';

const CustomerDetail = ({ cid }) => {
    const router = useRouter()

    const [data, setData] = useState(0);


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
                <CustomerMenu onSelectMenu={(idx) => setData(idx)} />
                <Box
                    display="flex"
                    sx={{
                        flex: 1,
                    }}>
                    <RatingContainer title='Organ System' />
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        Customer ID: {cid}
                        {'\n'}
                        Current Tab: {data}
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