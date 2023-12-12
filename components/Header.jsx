import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, TableBarOutlined, TableChartTwoTone } from "@mui/icons-material";

const pages = [
  {
    id: '0',
    title: 'Boards',
    path: '/boards'
  },

];

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const goHome = async () => {
    await router.push('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={goHome} sx={{ p: 0, mr: 2 }} color="inherit">
            <Home />
          </IconButton>

          <Box sx={{ flexgrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.id} href={page.path} passHref>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexgrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseMenu}>
                  <Link href={page.path} passHref>
                    <Button>{page.title}</Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
