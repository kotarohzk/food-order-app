import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Meals from "./Meals";
import ItemsProvider from "../store/ItemsProvider";

function Users() {
  const [isValid, setIsValid] = useState(false);
  const showModalHandler = () => {
    setIsValid(true);
  };
  const hideModalHandler = () => {
    setIsValid(false);
  };

  return (
    <CartProvider>
      <ItemsProvider>
        <Header
          showModalHandler={showModalHandler}
          hideModalHandler={hideModalHandler}
          isValid={isValid}
        />
        <Banner />
        <section>
          <About />
          <div>
            <Meals />
          </div>
        </section>
      </ItemsProvider>
    </CartProvider>
  );
}

export default Users;
