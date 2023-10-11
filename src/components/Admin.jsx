import Sidebar from "./Sidebar";
import ItemsProvider from "../store/ItemsProvider";
import { Box, Stack } from "@mui/material";
import Listings from "./Listings";
import CartProvider from "../store/CartProvider";

function Users() {
  return (
    <Box>
      <ItemsProvider>
        <CartProvider>
          <Stack direction="row">
            <Sidebar />
            <Listings />
          </Stack>
        </CartProvider>
      </ItemsProvider>
    </Box>
  );
}

export default Users;
