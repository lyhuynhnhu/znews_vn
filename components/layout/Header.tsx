'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container
} from '@mui/material';
import { Search, Menu } from '@mui/icons-material';
import menuItems from '@/constants/menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'white',
          color: 'black',
          boxShadow: 1,
          alignItems: 'center',
          zIndex: 100
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
            {isMobile && (
              <IconButton
                color='inherit'
                onClick={() => setDrawerOpen(true)}
                sx={{
                  '&:hover': {
                    color: '#ff6b35'
                  }
                }}
              >
                <Menu />
              </IconButton>
            )}
            {/* Logo - Positioned on the left */}
            <Box>
              <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{
                      fontWeight: 'bold',
                      color: '#ff6b35',
                      fontSize: { xs: '1.2rem', md: '1.5rem' }
                    }}
                  >
                    ZNews
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Navigation Menu - Centered */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    color='inherit'
                    sx={{
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      position: 'relative',
                      '&:hover': {
                        color: '#ff6b35',
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '100%'
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: '2px',
                        backgroundColor: '#ff6b35',
                        transition: 'width 0.3s ease'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            {/* Search and Menu - Positioned on the right */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <IconButton
                color='inherit'
                sx={{
                  '&:hover': {
                    color: '#ff6b35'
                  }
                }}
              >
                <Search />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor='top' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    '& .MuiListItemText-primary': {
                      color: '#ff6b35'
                    }
                  }
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
