import { Form, Button } from "react-bootstrap";
import blog from "../assets/blok.png";
import back from "../assets/back.jpg";

const divStyle = {
  width: "30rem",
  margin: "auto",
  padding: "2rem",
  height: "40rem",
  borderRadius: "1rem",
  backgroundColor: "#FFFFFF",
  boxShadow: "5px 3px 5px rgba(0,0,0,0.9)",
};
const mainDivStyle = {
  backgroundImage: `url(${back})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  height: "100vh",
};
const imgDivStyle = {
  backgroundColor: "#046582",
  borderRadius: "50%",
  width: "13rem",
  height: "13rem",
  alignItem: "center",
  margin: "auto",
};
const Register = () => {
  return (
    <div style={mainDivStyle}>
      <div style={divStyle}>
        <div style={imgDivStyle}>
          <img
            style={{ width: "14rem", padding: ".8rem", marginTop: ".6rem" }}
            src={blog}
            alt=""
          />
        </div>
        <Form.Label className="mt-3">── REGISTER ──</Form.Label>
        <Form className="mt-4 ">
          <Form.Group className="mb-4 " controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            REGISTER
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
