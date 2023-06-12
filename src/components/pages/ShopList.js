import React, { useState } from "react";
import ProductCard from "../subComponents/ProductCard.js";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import ShopCart from "../subComponents/ShopCart.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ShopList() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const addCartItems = (newItem) => {
    const existingItem = cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      const newItems = [...cartItems, { ...newItem, quantity: 1 }];
      setCartItems(newItems);
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += parseFloat(item.price) * item.quantity;
    });
    return totalPrice.toFixed(2);//upto 2 decimal value 
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paid, setPaid] = useState(false);
  return (
    <div>
      <div>
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {!paid ? (
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Choose A Payment Method
              </Typography>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "1vh",
                    width: "10vh",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "10vh" }} src="/gpay.png" />
                </Box>
                <Box
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "1vh",
                    width: "10vh",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "10vh" }} src="/paytm.png" />
                </Box>
                <Box
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "1vh",
                    width: "10vh",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "10vh" }} src="/debit card.png" />
                </Box>
                <Box
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "1vh",
                    width: "10vh",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "10vh" }} src="/credit-card.png" />
                </Box>
              </Box>
              <Button
                style={{ backgroundColor: "green", marginTop: "3vh" }}
                variant="contained"
                onClick={() => setPaid(true)}
              >
                Complete Payment
              </Button>
            </Box>
          ) : (
            <Box sx={style}>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckCircleIcon style={{ fontSize: "20vh", color: "green" }} />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Payment Successful
                </Typography>
                <Button variant="contained" onClick={() => navigate(0)}>
                  Done
                </Button>
              </Box>
            </Box>
          )}
        </Modal>
      </div>
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "#C4B0FF",
          marginBottom: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "auto",
            marginLeft: "5vw",
          }}
        >
          <input
            type="text"
            style={{
              width: "40vw",
              height: "5vh",
              backgroundColor: "white",
              borderColor:"purple",
              borderRadius: "5vw",
            }}
          />
          <SearchIcon
            style={{ fontSize: "40px", color: "white", marginLeft: "1vw" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "1vw",
            marginRight: "10vw",
            alignItems: "center",
          }}
        >
          <ShoppingCartIcon
            onClick={() => setCartOpen(!cartOpen)}
            style={{ fontSize: "40px", color: "white" }}
          />
          <p>{cartItems.length}</p>
        </div>
      </div>
      <Grid container>
        <Grid container xs={cartOpen ? 9 : 12} spacing={8}> 
        {/* if not open the grid size must be 9 otherwise 12 */}
          {arr.map((index) => (
            <Grid item xs={cartOpen ? 4 : 3} key={index}>
              {/* if open only 3 be shown if not 4 */}
              <ProductCard addCartItems={addCartItems} />
            </Grid>
          ))}
        </Grid>
        <Grid container xs={cartOpen ? 4 : 0} spacing={8}>

          <Grid item xs={12}>
            {cartOpen ? (
              <ShopCart
                openModal={handleOpen}
                calculateTotalPrice={calculateTotalPrice}
                cartItems={cartItems}
                removeItem={removeItem}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default ShopList;
