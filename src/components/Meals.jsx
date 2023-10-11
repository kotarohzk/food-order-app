import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useItemsContext } from "../store/ItemsProvider";
import { useCartContext } from "../store/CartProvider";

function Meals() {
  const { itemsData } = useItemsContext();
  const { addItem } = useCartContext();

  return (
    <Box p={10}>
      <Typography align="center" variant="h4" mb={5}>
        Available Items
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {itemsData.map((item) => (
          <Grid key={item.id} item>
            <Card sx={{ width: 345, minHeight: 345 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={item.image}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addItem(item)}>
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Meals;
