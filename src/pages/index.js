import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useSignIn } from "src/data/repository/auth";
import { useEffect } from "react";
import { useDialog } from "src/components/dialogs/context";

const index = () => {
  const router = useRouter();
  const { mutate, status } = useSignIn();
  const { showAlertDialog } = useDialog();
  const formik = useFormik({
    initialValues: {
      username: "admin1",
      password: "hawon1234",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("Username is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      // router.push("/customers");
      const { username, password } = values;
      mutate(
        {
          username,
          password,
        },
        {
          onSuccess: (data, variables) => {
            console.log(data.data.token);
            sessionStorage.setItem("MOCEAN-TOKEN", data.data.token);
            router.push("/customers");
          },
          onError: (error) => {
            showAlertDialog({
              title: "로그인 오류",
              message: `[${error.code}]\n${error.message}`,
            });
            setSubmitting(false);
          },
        }
      );
    },
  });

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <>
      <Head>
        <title>Login | MOCEAN</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Image src={"/static/images/mocean_sns.png"} width={600} height={95} />
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                MOCEAN 관리자 로그인
              </Typography>
            </Box>

            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="User Name"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.username}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                로그인
              </Button>
            </Box>
          </form>

          <Typography color="textSecondary" variant="body2">
            Don&apos;t have an account?{" "}
            <NextLink href="/register">
              <Link
                to="/register"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Link>
            </NextLink>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default index;
