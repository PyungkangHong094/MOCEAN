import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { CustomerFormToolbar } from "src/components/customer/customer-form-toolbar";
import FormCView from "src/components/form/c";
import { CProvider } from "src/components/form/c/context";
import FormEView from "src/components/form/e";
import { EProvider } from "src/components/form/e/context";
import FormMView from "src/components/form/m";
import FormOView from "src/components/form/o";
import FormProfile, { ProfileProvider } from "src/components/form/profile";
import LoadingBar from "src/components/loading-bar";
import { ResultMenu } from "src/components/result/result-menu";
import {
  useUser,
  useUserforC,
  useUserforE,
  useUserforM,
  useUserforO,
} from "src/data/repository/users";
import { DashboardLayout } from "../../components/dashboard-layout";

const CustomerForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [menuIdx, setMenuIdx] = useState(0);

  const { isLoading, data: userData } = useUser(id);
  console.log(userData);

  const renderResultView = () => {
    switch (menuIdx) {
      case 0:
        return <FormMView id={id} />;
      case 1:
        return <FormOView id={id} />;
      case 2:
        return <FormCView id={id} />;
      case 3:
        return <FormEView id={id} />;
      default:
        return <FormMView id={id} />;
    }
  };

  return (
    <>
      <Head>
        <title>Customer Form | MOCEAN</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <ProfileProvider>
          <CProvider>
            <EProvider>
              <Box sx={{ position: "-webkit-sticky", position: "sticky", top: 0, zIndex: 2 }}>
                <CustomerFormToolbar id={id} currentMenu={menuIdx} />
              </Box>
              {isLoading ? <LoadingBar /> : <FormProfile profile={userData} />}
              <Box sx={{ position: "-webkit-sticky", position: "sticky", top: 80, zIndex: 2 }}>
                <ResultMenu onSelectMenu={(idx) => setMenuIdx(idx)} />
              </Box>
              {renderResultView()}
            </EProvider>
          </CProvider>
        </ProfileProvider>
      </Box>
    </>
  );
};

CustomerForm.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export function getServerSideProps({ query }) {
//     let data = query.id ? {
//         id: query.id
//     } : {};
//     return {
//         props: { data }
//     };
// }

export default CustomerForm;
