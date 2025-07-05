import React from "react";
import { Box, Container } from "@mui/material";
import Header from "@/components/layout/Header";
import TrendingTag from "@/components/homepage/TrendingTag";
import FeatureSection from "@/components/homepage/FeatureSection";
import BASE_URL from "@/constants/host";

async function getNews() {
  const res = await fetch(`${BASE_URL}/api/news`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
}

export default async function Home() {
  const [news] = await Promise.all([getNews()]);

  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container maxWidth="lg">
          <TrendingTag />
          <FeatureSection news={news} />
        </Container>
      </Box>
    </>
  );
}
