import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { CustomerAddToolbar } from "src/components/customer/customer-add-toolbar";
import FormCView from "src/components/form/c";
import { CProvider } from "src/components/form/c/context";
import FormEView from "src/components/form/e";
import { EProvider } from "src/components/form/e/context";
import FormMView from "src/components/form/m";
import FormOView from "src/components/form/o";
import { OProvider } from "src/components/form/o/context";
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
import { useMutation } from "react-query";
import { addUser } from "src/data/repository/users";


const CustomerAddForm = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Customer Add | MOCEAN</title>
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
                <CustomerAddToolbar />
                <FormProfile />
        </ProfileProvider>
      </Box>
    </>
  );
};

CustomerAddForm.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export function getServerSideProps({ query }) {
//     let data = query.id ? {
//         id: query.id
//     } : {};
//     return {
//         props: { data }
//     };
// }

export default CustomerAddForm;
