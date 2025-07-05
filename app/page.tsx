import React from "react";
import { Box, Container } from "@mui/material";
import Header from "@/components/layout/Header";
import TrendingTag from "@/components/homepage/TrendingTag";
import FeatureSection from "@/components/homepage/FeatureSection";
import BooksSection from "@/components/homepage/BookSection";
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

export default async function Home() {
  const [news, books] = await Promise.all([getNews(), getBooks()]);

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
        </Container>
      </Box>
    </>
  );
}
