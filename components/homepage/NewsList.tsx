"use client";
import { Box, Card, Grid } from "@mui/material";
import Link from "next/link";
import { NewsFields } from "@/constants/news";
import CustomTypography from "../ui/CustomTypography";
import ImageBox from "../ui/ImageBox";
import NewsHorizontalCard from "./NewsHorizontalCard";

interface ListSectionProps {
  newsList: NewsFields[];
}

const NewsList = ({ newsList }: ListSectionProps) => {
  const moreRead = newsList.slice(-5);

  return (
    <Box sx={{ px: { xs: 1, md: 4 }, py: 2 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8.5 }} spacing={2}>
          {newsList.map((news: any, idx: number) => (
            <NewsHorizontalCard
              key={news.id}
              {...news}
              isLast={idx === newsList.length - 1}
            />
          ))}
        </Grid>
        <Grid size={3.5} display={{ xs: "none", md: "block" }}>
          <Card variant="outlined" sx={{ py: 4, px: 2 }}>
            <CustomTypography customvariant="title" sx={{ mb: 2 }}>
              Đọc nhiều
            </CustomTypography>
            {moreRead.map((news: any) => (
              <Link
                href={`/news/${news.id}`}
                style={{ textDecoration: "none" }}
                key={news.id}
              >
                <Box sx={{ display: "flex", mb: 2 }}>
                  <ImageBox
                    src={news.image}
                    alt={news.title}
                    sx={{
                      width: 70,
                      height: 70,
                      mr: 1,
                    }}
                  />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", flex: 1 }}
                  >
                    <CustomTypography
                      colorvariant="textSecondary"
                      sx={{ fontSize: "0.7rem" }}
                    >
                      {news.category}
                    </CustomTypography>
                    <CustomTypography
                      customvariant={"smallTitle"}
                      sx={{
                        "&:hover": {
                          color: "#006BA0",
                        },
                      }}
                    >
                      {news.title}
                    </CustomTypography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsList;
