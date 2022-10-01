import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { CustomerFormToolbar } from "src/components/customer/customer-form-toolbar";
import { DashboardLayout } from '../../components/dashboard-layout';



const CustomerForm = ({ data: initialData }) => {
    const router = useRouter()

    const { id } = initialData;

    return (
        <>
            <Head>
                <title>
                    Customer Form | MOCEAN
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: 'column'
                }}
            >
                <CustomerFormToolbar isNew={id === null || id === undefined} />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        flex: 1,
                    }}>
                    <Typography>
                        Customer ID: {id ?? 'New'}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

CustomerForm.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export function getServerSideProps({ query }) {
    let data = query.id ? {
        id: query.id
    } : {};
    return {
        props: { data }
    };
}

export default CustomerForm;