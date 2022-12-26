import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ResultMenu } from "src/components/result/result-menu";
import { ResultToolbar } from "src/components/result/result-toolbar";
import RatingContainer from "src/components/result/rating/rating-container";
import { DashboardLayout } from "../../components/dashboard-layout";
import ResultMView from "src/components/result/view/m";
import ResultOView from "src/components/result/view/o";
import ResultCView from "src/components/result/view/c";
import ResultEView from "src/components/result/view/e";
import {useUser} from "src/data/repository/users"

const CustomerDetail = () => {
  const router = useRouter();
  const { cid } = router.query;

  const {isLoading, data}  = useUser(cid);
  const {name, create_dt, email} = data || {}

  const [menuIdx, setMenuIdx] = useState(0);

  const renderResultView = () => {
    switch (menuIdx) {
      case 0:
        return <ResultMView id={cid} />;
      case 1:
        return <ResultOView id={cid} />;
      case 2:
        return <ResultCView id={cid} />;
      case 3:
        return <ResultEView id={cid} />;
      default:
        return <ResultMView id={cid} />;
    }
  };

  return (
    <>
      <Head>
        <title>Customer Detail | MOCEAN</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Box sx={{ position: "-webkit-sticky", position: "sticky", top: 0, zIndex: 2 }}>
          <ResultToolbar
            name={name}
            datetime={create_dt}
            email={email}
          />
          <ResultMenu onSelectMenu={(idx) => setMenuIdx(idx)} />
        </Box>
        <Box
          display="flex"
          sx={{
            flex: 1,
            p: 1,
          }}
        >
          {renderResultView()}
        </Box>
      </Box>
    </>
  );
};

CustomerDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CustomerDetail;
