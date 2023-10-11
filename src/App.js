import Users from "./components/Users";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { useState } from "react";
import { Stack } from "@mui/material";

function App() {
  const [switchPage, setSwitchPage] = useState(false);
  return (
    <Stack>
      {switchPage ? <Admin /> : <Users />}
      <Footer switchPage={switchPage} setSwitchPage={setSwitchPage} />
    </Stack>
  );
}

export default App;
