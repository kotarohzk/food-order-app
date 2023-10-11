import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Stack,
  Toolbar,
  Badge,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import { AddCircle, RemoveCircle, ShoppingCart } from "@mui/icons-material";
import { useCartContext } from "../store/CartProvider";

function Header(props) {
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const countCartItems = () => {
    let quantity = 0;
    items.forEach((item) => (quantity += item.quantity));
    return quantity;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ border: "none" }}
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <Stack direction="row" justifyContent="flex-end" width="100%" p={1}>
            <Badge badgeContent={countCartItems()} color="secondary">
              <Fab
                size="medium"
                variant="extended"
                onClick={props.showModalHandler}
                sx={{ zIndex: 1 }}
              >
                <ShoppingCart sx={{ mr: 1 }} />
                Cart
              </Fab>
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>
      <Dialog
        open={props.isValid}
        onClose={props.hideModalHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Your Cart</DialogTitle>
        <DialogContent sx={{ width: "100%" }}>
          <List>
            {items.map((item) => {
              console.log(item);
              return (
                <ListItem key={item.id}>
                  <ListItemText>
                    <span>{item.name}</span>
                    <Chip
                      label={"$" + item.price}
                      size="small"
                      color="secondary"
                      sx={{ marginLeft: "10px" }}
                    />
                  </ListItemText>
                  <IconButton edge="end" onClick={() => removeItem(item.id)}>
                    <RemoveCircle />
                  </IconButton>
                  <Typography edge="end" ml={1}>
                    {item.quantity}
                  </Typography>
                  <IconButton edge="end" onClick={() => addItem(item)}>
                    <AddCircle />
                  </IconButton>
                </ListItem>
              );
            })}
            <Divider />
            <ListItem>
              <ListItemText>
                <Typography variant="h5">Total Amount: </Typography>
              </ListItemText>
              <Typography edge="end" variant="h5">
                ${totalAmount.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={props.hideModalHandler}>
            Close
          </Button>
          <Button
            variant="contained"
            onClick={props.hideModalHandler}
            autoFocus
          >
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header;
