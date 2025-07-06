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
    <Box sx={{ py: 2, px: { xs: 1, md: 4 } }}>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid size={{ md: 3.5 }} display={{ xs: "none", md: "block" }}>
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
        <Grid container size={{ xs: 12, md: 8.5 }}>
          <Grid container size={{ xs: 12, sm: 7, md: 12 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              {featuredNews && <NewsVerticalCard {...featuredNews} featured />}
            </Grid>

            {/* Right Sidebar */}
            <Grid container size={{ xs: 12, md: 4 }} spacing={{ xs: 2, md: 1 }}>
              {rightSidebarNews.map((article: any) => (
                <Grid size={{ xs: 6, md: 12 }} key={article.id}>
                  <NewsVerticalCard key={article.id} {...article} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Small News Content */}
          <Grid size={{ xs: 12, sm: 5 }} display={{ md: "none" }}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeatureSection;
