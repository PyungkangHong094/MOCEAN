import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { CustomerFormToolbar } from "src/components/customer/customer-form-toolbar";
import FormCView from "src/components/form/c";
import FormEView from "src/components/form/e";
import FormMView from "src/components/form/m";
import FormOView from "src/components/form/o";
import FormProfile from "src/components/form/profile";
import { ResultMenu } from "src/components/result/result-menu";
import { DashboardLayout } from '../../components/dashboard-layout';



const CustomerForm = ({ data: initialData }) => {
    const router = useRouter()

    const { id } = initialData;

    const [menuIdx, setMenuIdx] = useState(0);

    const renderResultView = () => {
        switch (menuIdx) {
            case 0:
                return <FormMView />;
            case 1:
                return <FormOView />;
            case 2:
                return <FormCView />;
            case 3:
                return <FormEView />;
            default:
                return <FormMView />;
        }
    }

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
                <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 0, zIndex: 2, }}>
                    <CustomerFormToolbar isNew={id === null || id === undefined} />
                </Box>
                <FormProfile />
                <Box sx={{ position: '-webkit-sticky', position: 'sticky', top: 80, zIndex: 2, }}>
                    <ResultMenu onSelectMenu={(idx) => setMenuIdx(idx)} />
                </Box>
                {renderResultView()}
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