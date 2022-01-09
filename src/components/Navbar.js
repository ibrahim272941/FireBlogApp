import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cw from "../assets/cw.jpeg";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const mainDivStyle = {
    backgroundColor: "#046582",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={mainDivStyle}>
      <img
        onClick={() => navigate("/")}
        style={{ width: "5rem", padding: "1rem" }}
        src={cw}
        alt=""
      />
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FaUserCircle
          style={{ color: "white", width: "4rem", height: "2rem" }}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
        <MenuItem onClick={() => navigate("/login")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
