"use client";
import { Box, Typography, Grid, Divider } from "@mui/material";
import BusinessCard from "./BusinessCard";

interface BusinessNews {
  id: number;
  title: string;
  summary?: string;
  image: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  size: "large" | "medium" | "small";
}

interface BusinessSectionProps {
  type: string;
  businessNews: BusinessNews[];
}

const BusinessSection = ({ type, businessNews }: BusinessSectionProps) => {
  const featuredNews = businessNews.find((item) => item.size === "large");
  const mediumNews = businessNews.filter((item) => item.size === "medium");
  const smallNews = businessNews.filter((item) => item.size === "small");

  return (
    <Box sx={{ mb: 4, p: 4 }}>
      {/* Section Header */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          mb: 1,
          position: "relative",
          "&::before": {
            content: '"/"',
            color: "#ff6b35",
            marginRight: 1,
            fontSize: "1em",
            fontWeight: "bold",
          },
        }}
      >
        {type}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {/* Left Column - Featured News (Large) */}
        <Grid size={{ xs: 12, md: 5.5 }}>
          {featuredNews && <BusinessCard {...featuredNews} />}
        </Grid>

        {/* Center Column - Medium News */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {mediumNews.map((article) => (
              <BusinessCard key={article.id} {...article} />
            ))}
          </Box>
        </Grid>

        {/* Right Column - Small News List */}
        <Grid size={{ xs: 12, md: 3.5 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {smallNews.map((article, index) => (
              <BusinessCard
                key={article.id}
                {...article}
                isLast={index === smallNews.length - 1}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessSection;
