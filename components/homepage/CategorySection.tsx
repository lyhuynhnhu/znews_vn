"use client";
import { Box, Grid } from "@mui/material";
import CategoryColumn from "./CategoryColumn";

interface CategoryNews {
  id: number;
  title: string;
  image: string;
  featured: boolean;
}

interface CategorySectionProps {
  categoryNews: Record<string, CategoryNews[]>;
}

const CategorySection = ({ categoryNews }: CategorySectionProps) => {
  const categories = Object.keys(categoryNews);

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {categories.map((category) => {
          const articles = categoryNews[category];

          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={category}>
              <CategoryColumn category={category} articles={articles} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategorySection;
