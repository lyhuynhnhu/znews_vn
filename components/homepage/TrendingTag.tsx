'use client';
import { Box, Chip, useTheme } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

const trendingTags = ['FIFA Club World Cup 2025', 'Người nổi tiếng quảng cáo hàng giả', 'Sáp nhập tỉnh thành'];

const TrendingTag = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: theme.palette.primary.main,
          borderRadius: '50%'
        }}
      >
        <TrendingUp sx={{ color: 'white' }} />
      </Box>

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {trendingTags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            size='small'
            sx={{
              bgcolor: '#f0f0f0',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white'
              },
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&::before': {
                content: '"#"',
                color: 'gray',
                fontSize: '0.8em',
                paddingLeft: 1
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TrendingTag;
