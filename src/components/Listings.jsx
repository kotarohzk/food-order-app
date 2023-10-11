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

function Listings() {
  const { itemsData, removeItem } = useItemsContext();

  return (
    <Box p={10} sx={{ width: { xs: "100%", md: "calc(100% - 300px)" } }}>
      <Typography align="center" variant="h4" mb={5}>
        Available Items
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {itemsData.map((item) => (
          <Grid key={item.id} item>
            <Card sx={{ width: 280, minHeight: 345 }}>
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
                <Button size="small" onClick={() => removeItem(item.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Listings;
