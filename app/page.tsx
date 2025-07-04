import React from "react";
import { Box, Container } from "@mui/material";
import Header from "@/components/layout/Header";
import TrendingTag from "@/components/homepage/TrendingTag";

export default async function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container maxWidth="lg">
          <TrendingTag />
        </Container>
      </Box>
    </>
  );
}
