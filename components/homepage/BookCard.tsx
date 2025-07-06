'use client';
import { Card, CardMedia, CardContent, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import CustomTypography from '@/components/ui/CustomTypography';

interface BookCardProps {
  id: number;
  title: string;
  image: string;
}

const BookCard = ({ id, title, image }: BookCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Link
      href={`/news/${id}`}
      style={{
        textDecoration: 'none',
        minWidth: isMobile ? 'calc(100% - 5px)' : isTablet ? 'calc(33% - 10px)' : 'calc(20% - 14px)'
      }}
    >
      <Card
        variant='outlined'
        sx={{
          cursor: 'pointer',
          height: '100%'
        }}
      >
        <CardMedia component='img' height={250} image={image} alt={title} />
        <CardContent>
          <CustomTypography
            customvariant='smallTitle'
            colorvariant='textPrimary'
            sx={{
              '&:hover': {
                color: theme.palette.secondary.main
              },
              mb: 1
            }}
          >
            {title}
          </CustomTypography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
