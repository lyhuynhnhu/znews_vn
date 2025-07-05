import React from "react";
import { Box, Container } from "@mui/material";
import Header from "@/components/layout/Header";
import TrendingTag from "@/components/homepage/TrendingTag";
import FeatureSection from "@/components/homepage/FeatureSection";
import BooksSection from "@/components/homepage/BookSection";
import BusinessSection from "@/components/homepage/BusinessSection";
import BASE_URL from "@/constants/host";

async function getNews() {
  const res = await fetch(`${BASE_URL}/api/news`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  return res.json();
}

async function getBooks() {
  const res = await fetch(`${BASE_URL}/api/books`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

async function getBusinessNews() {
  const res = await fetch(`${BASE_URL}/api/business`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch business news");
  }
  return res.json();
}

export default async function Home() {
  const [news, books, businessNews] = await Promise.all([
    getNews(),
    getBooks(),
    getBusinessNews(),
  ]);

  const businessNewsKeys = Object.keys(businessNews);

  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container maxWidth="lg">
          <TrendingTag />
          <FeatureSection news={news} />
          <BooksSection books={books} />
          {businessNewsKeys.length > 0 &&
            businessNewsKeys.map((item) => (
              <BusinessSection
                key={item}
                type={item}
                businessNews={businessNews[item]}
              ></BusinessSection>
            ))}
        </Container>
      </Box>
    </>
  );
}
