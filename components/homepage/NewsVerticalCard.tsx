"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import CustomTypography from "../ui/CustomTypography";
import ImageBox from "../ui/ImageBox";

interface NewsCardProps {
  id: number;
  title: string;
  summary?: string;
  image: string;
  category?: string;
  publishedAt?: string;
  featured?: boolean;
}

const NewsVerticalCard = ({
  id,
  title,
  summary,
  image,
  featured = false,
}: NewsCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageBox
          src={image}
          alt={title}
          sx={{
            height: featured ? { xs: 200, md: 320 } : { xs: 100, sm: 120, md: 180 },
          }}
        />

        <CustomTypography
          customvariant={!featured ? "mediumTitle" : "title"}
          colorvariant="textPrimary"
          maxLines={featured ? 3 : { xs: "auto", sm: 2 }}
          sx={{
            mb: 1,
            mt: featured ? 2 : 1,
            "&:hover": {
              color: "#006BA0",
            },
          }}
        >
          {title}
        </CustomTypography>

        {featured && summary && (
          <CustomTypography
            customvariant="summary"
            colorvariant="textSecondary"
            maxLines={3}
            sx={{
              mb: 1,
            }}
          >
            {summary}
          </CustomTypography>
        )}
      </Box>
    </Link>
  );
};

export default NewsVerticalCard;
