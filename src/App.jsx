import { Nav } from "./components/Nav.jsx";
import { ShoeDetail } from "./components/ShoeDetail.jsx";
import { SHOES_LIST } from "./constant.js";
import { NewArrival } from "./components/NewArrival.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { useEffect, useState } from "react";
import { Cart } from "../src/components/Cart.jsx";
import { DarkMode } from "../src/components/DarkMode.jsx";

export function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOES_LIST[2]);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) => {
    console.log(productId)
    setCartItems(cartItems.filter((item) => item.product.id != productId));

  };

  const addToCart = (product, qty, size) => {
    
    if (qty && size) {
      const updatedCartItems = [...cartItems];  
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({product, qty, size});
      }
      setCartItems(updatedCartItems);
    }
  };
  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night-50">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart}  />
      <NewArrival items={SHOES_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setSidebarOpen(!isSidebarOpen)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart}/>
      </Sidebar>
      <DarkMode />
    </div>
  );
}
