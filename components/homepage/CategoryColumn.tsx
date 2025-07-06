'use client';
import { Box } from '@mui/material';
import CategoryCard from '@/components/homepage/CategoryCard';
import CustomTypography from '@/components/ui/CustomTypography';

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
        customvariant='title'
        colorvariant='textPrimary'
        sx={{
          mb: 3,
          color: 'black',
          '&::before': {
            content: '"/"',
            color: '#ff6b35',
            marginRight: 1,
            fontSize: '1em',
            fontWeight: 'bold'
          }
        }}
      >
        {category}
      </CustomTypography>

      {/* Featured Article */}
      {featuredArticle && <CategoryCard {...featuredArticle} />}

      {/* Sub Articles */}
      <Box>
        {subArticles.map((article) => (
          <CategoryCard key={article.id} {...article} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryColumn;
