"use client";
import { Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import CustomTypography from "../ui/CustomTypography";

interface CategoryNews {
  id: number;
  title: string;
  image: string;
  featured: boolean;
}

interface CategoryColumnProps {
  category: string;
  articles: CategoryNews[];
}

const CategoryColumn = ({ category, articles }: CategoryColumnProps) => {
  const featuredArticle = articles.find((article) => article.featured);
  const subArticles = articles.filter((article) => !article.featured);

  return (
    <Box>
      {/* Category Header */}
      <CustomTypography
        customvariant="title"
        colorvariant="textPrimary"
        sx={{
          mb: 3,
          color: "black",
          "&::before": {
            content: '"/"',
            color: "#ff6b35",
            marginRight: 1,
            fontSize: "1em",
            fontWeight: "bold",
          },
        }}
      >
        {category}
      </CustomTypography>

      {/* Featured Article */}
      {featuredArticle && (
        <CategoryCard {...featuredArticle} category={category} />
      )}

      {/* Sub Articles */}
      <Box>
        {subArticles.map((article) => (
          <CategoryCard key={article.id} {...article} category={category} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryColumn;
