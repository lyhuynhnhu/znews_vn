import { Box, Grid } from "@mui/material";
import NewsVerticalCard from "./NewsVerticalCard";
import NewsHorizontalCard from "./NewsHorizontalCard";

interface News {
  id: number;
  title: string;
  image: string;
  summary?: string;
  featured: boolean;
}

interface FeatureSectionProps {
  news: News[];
}

const FeatureSection = ({ news }: FeatureSectionProps) => {
  const featuredNews = news?.find((item: News) => item.featured);
  const notFeaturedNews = news?.filter((item: News) => !item.featured);
  const leftSidebarNews = notFeaturedNews?.slice(0, 5);
  const rightSidebarNews = notFeaturedNews?.slice(-2);

  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {leftSidebarNews.map((article: any, idx: number) => (
              <NewsHorizontalCard
                key={article.id}
                id={article.id}
                title={article.title}
                image={article.image}
                isLast={idx === leftSidebarNews.length - 1}
              />
            ))}
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          {featuredNews && (
            <Box sx={{ mb: 4 }}>
              <NewsVerticalCard {...featuredNews} featured />
            </Box>
          )}
        </Grid>

        {/* Right Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {rightSidebarNews.map((article: any) => (
              <NewsVerticalCard key={article.id} {...article} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;
