"use client";
import { Box, Grid, Divider, useTheme } from "@mui/material";
import CustomTypography from "../ui/CustomTypography";
import BusinessCard from "./BusinessCard";
import { NewsFields } from "@/constants/news";

interface BusinessNews extends NewsFields {
  size: "large" | "medium" | "small";
}

interface BusinessSectionProps {
  type: string;
  businessNews: BusinessNews[];
}

const BusinessSection = ({ type, businessNews }: BusinessSectionProps) => {
  const theme = useTheme();

  const featuredNews = businessNews.find((item) => item.size === "large");
  const mediumNews = businessNews.filter((item) => item.size === "medium");
  const smallNews = businessNews.filter((item) => item.size === "small");

  return (
    <Box sx={{ p: { xs: 1, md: 4 } }}>
      {/* Section Header */}
      <CustomTypography
        customvariant="title"
        colorvariant="textPrimary"
        sx={{
          color: "black",
          "&::before": {
            content: '"/"',
            color: theme.palette.primary.main,
            marginRight: 1,
            fontSize: "1em",
            fontWeight: "bold",
          },
        }}
      >
        {type}
      </CustomTypography>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3}>
        {/* Left Column - Featured News (Large) */}
        <Grid size={{ xs: 12, sm: 7, md: 5.5 }}>
          {featuredNews && <BusinessCard {...featuredNews} />}
        </Grid>

        {/* Center Column - Medium News */}
        <Grid size={{ xs: 12, sm: 5, md: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {mediumNews.map((article) => (
              <BusinessCard key={article.id} {...article} />
            ))}
          </Box>
        </Grid>

        {/* Right Column - Small News List */}
        <Grid container size={{ xs: 12, sm: 12, md: 3.5 }} spacing={2}>
          {smallNews.map((article, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 12 }} key={article.id}>
              <BusinessCard
                key={article.id}
                {...article}
                isLast={index === smallNews.length - 1}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessSection;
