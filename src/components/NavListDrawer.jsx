import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 300 }}>
      <nav>
        <List>
          <ListItem>
            <ListItemButton href="/#banner">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/#sobre_me">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre Mi" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/#portafolio">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Portafolio" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/#skills">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Habilidades" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/#contenedorContacto">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
