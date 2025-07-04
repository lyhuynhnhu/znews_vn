"use client";
import { Box, Chip } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";

const trendingTags = [
  "FIFA Club World Cup 2025",
  "Người nổi tiếng quảng cáo hàng giả",
  "Sáp nhập tỉnh thành",
];

const TrendingTag = () => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "#ff6b35",
          borderRadius: "50%",
        }}
      >
        <TrendingUp sx={{ color: "white" }} />
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {trendingTags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size="small"
            sx={{
              bgcolor: "#f0f0f0",
              "&:hover": {
                bgcolor: "#ff6b35",
                color: "white",
              },
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&::before": {
                content: '"#"',
                color: "gray",
                fontSize: "0.8em",
                paddingLeft: 1,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TrendingTag;
