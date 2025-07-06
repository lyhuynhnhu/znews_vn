"use client";
import { Box, Divider } from "@mui/material";
import Link from "next/link";
import { NewsFields } from "@/constants/news";
import CustomTypography from "../ui/CustomTypography";
import ImageBox from "../ui/ImageBox";

interface MainNewsCardProps extends NewsFields {
  isLast?: boolean;
}

const NewsHorizontalCard = ({
  id,
  title,
  summary,
  image,
  isLast,
}: MainNewsCardProps) => {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          pb: 2,
        }}
      >
        <ImageBox
          src={image}
          alt={title}
          sx={{
            width: { xs: "30%", md: "40%" },
            height: 70,
            mr: 2,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CustomTypography
            customvariant="smallTitle"
            colorvariant="textPrimary"
            sx={{
              mb: 1,
              "&:hover": {
                color: "#006BA0",
              },
            }}
          >
            {title}
          </CustomTypography>

          {summary && (
            <CustomTypography
              customvariant="summary"
              colorvariant="textSecondary"
              maxLines={3}
            >
              {summary}
            </CustomTypography>
          )}
        </Box>
      </Box>
      {!isLast && <Divider />}
    </Link>
  );
};

export default NewsHorizontalCard;
