import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function ShopCart({
  openModal,
  cartItems,
  increaseQuantity,
  removeItem,
  decreaseQuantity,
  calculateTotalPrice,
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        // borderLeft: "3px dashed gray",
      }}
      // space between grid
    >
      <div style={{ width: "90%", height: "100%" }}>
        <div
          style={{
            marginTop: "2vh",
            padding: "2vh",
            width: "100%",
            height: "20vh",
            backgroundColor: "#BA90C6",
          }}
          // background for checkout
        >
          <p
            style={{
              fontSize: "3vh",
              fontWeight: "bold",
              color: "rgba(100,10,100,0.8)",
              textAlign: "left",
              margin:0
            }}
            
          >
            {cartItems.length} Items
          </p>
          <p
            style={{
              fontSize: "3vh",
              fontWeight: "bold",
              color: "rgba(100,10,100,0.8)",
              textAlign: "left",
            }}
            //styling the ckecout div
          >
            Total : ₹{cartItems.length > 0 ? calculateTotalPrice() : 0}
          </p>
          <Button variant="contained" style={{ backgroundColor: "black" }} onClick={openModal}>
            Checkout
          </Button>
        </div>

        {cartItems.map((items) => (
          <div
          //styling the item list
            style={{
              marginTop: "2vh",
              padding: "2vh",
              width: "100%",
              height: "20vh",
              backgroundColor: "#A6D0DD",
            }}
          >
            <p
              style={{
                fontSize: "3vh",
                fontWeight: "bold",
                color: "rgba(100,10,100,0.8)",
                textAlign: "left",
              }}
            >
              {items.name}
            </p>
            <p
              style={{
                fontSize: "2.5vh",
                fontWeight: "light",
                margin: 0,
                color: "rgba(255,255,255,1)",
                textAlign: "left",
              }}
            >
              {items.department}
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                  color: "rgba(100,10,100,0.8)",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                ₹{items.price * items.quantity}
              </p>
              <Button
                disabled={items.quantity < 2}
                onClick={() => decreaseQuantity(items.id)}
                variant="contained"
                style={{  backgroundColor: "#146C94" ,width:"10px",borderRadius:"40px" }}
              >
                -
              </Button>
              <p>{items.quantity}</p>
              <Button
                onClick={() => increaseQuantity(items.id)}
                variant="contained"
                style={{ backgroundColor: "#146C94" ,width:"10px",borderRadius:"40px", marginRight: "10px"}}
              >
                +
              </Button>
              
              <Button
                variant="contained"
                style={{ backgroundColor: "black"  , height:"35px"}}
                onClick={() => removeItem(items.id)}
              >
                <DeleteForeverIcon style={{ fontSize: "3vh" }} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCart;
