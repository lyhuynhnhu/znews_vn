'use client';
import { Box } from '@mui/material';
import Link from 'next/link';
import ImageBox from '@/components/ui/ImageBox';
import CustomTypography from '@/components/ui/CustomTypography';

interface CategoryCardProps {
  id: number;
  title: string;
  image: string;
  featured: boolean;
}

const CategoryCard = ({ id, title, image, featured }: CategoryCardProps) => {
  const href = `/news/${id}`;
  const boxStyles = featured
    ? { cursor: 'pointer', mb: 3 }
    : {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        mb: 2,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f5f5f5',
          borderRadius: 1,
          transition: 'all 0.3s ease'
        },
        p: 1
      };
  const imageBoxStyles = featured
    ? { mb: 2 }
    : { width: { xs: 100, md: 60 }, height: { xs: 70, md: 45 } };
  const typographyVariant = featured ? 'mediumTitle' : 'subTitle';
  const maxLines = featured ? 1 : 3;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Box sx={boxStyles}>
        <ImageBox src={image} alt={title} sx={imageBoxStyles} />
        <CustomTypography
          customvariant={typographyVariant}
          colorvariant='textPrimary'
          maxLines={maxLines}
          sx={{
            flex: 1,
            '&:hover': {
              color: '#006BA0'
            }
          }}
        >
          {title}
        </CustomTypography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
