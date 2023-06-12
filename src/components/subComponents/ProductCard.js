import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { PropTypes } from 'prop-types';
import uniqid from 'uniqid';

function ProductCard({ addCartItems }) {
  return (
    <div
      style={{
        width: "20vw",
        height: "50vh",
        borderRadius: "1vh",
        border: "1px solid rgb(200,200,200)",
        boxShadow: "0 0 10px 1px rgb(200,200,200)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "50%",
          borderTopLeftRadius: "1vh",
          borderTopRightRadius: "1vh",
          backgroundImage: "url(https://picsum.photos/200/300)",
        }}
      ></div>
      <div
        style={{
          paddingLeft: "0.5vw",
          paddingRight: "0.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          height: "50%",
          backgroundColor: "#917FB3",
          animation: "fade-in 1s ease-in-out", // Add animation style
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)", // Add shadow style
          
        }}
      >
        <h4 style={{ margin: 0 }}>{faker.commerce.product()}</h4>
        <p style={{ margin: 0, color: "black", fontSize: "large" }}>
          {faker.commerce.department()}
          {" | "} {faker.commerce.department()}
          {" | "} {faker.commerce.department()}
        </p>
        <p
          style={{
            color: "black",
            margin: 0,
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          {faker.commerce.price({ symbol: "₹" })}
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Button
        variant="contained"
        style={{
          backgroundColor: "#0C134F",
          width: "40%",
          borderRadius: "30px",
          animation: "jump 0.5s",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)",
        }}
        onClick={() => {
          addCartItems({
            id: uniqid(),
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            department: `${faker.commerce.department()} | ${faker.commerce.department()} | ${faker.commerce.department()}`,
            quantity: 1,
          });
        }}
      >
        <AddShoppingCartIcon style={{ color: "white", fontSize: "1.5vw" }} />
        Add
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#2A2F4F",
          width: "50%",
          borderRadius: "30px",
          animation: "jump 0.5s",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)",
        }}
      >
        <AddShoppingCartIcon style={{ color: "white", fontSize: "1.5vw" }} />
        Buy Now
      </Button>
      
      
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  addCartItems: PropTypes.func.isRequired,
};

export default ProductCard;

