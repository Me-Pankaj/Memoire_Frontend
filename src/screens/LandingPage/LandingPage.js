import "./landingPage.css";
import { Button, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate()

  useEffect(()=>{                                                                           
    const userInfo = localStorage.getItem("userInfo")

    if(userInfo){
      navigate("/mynotes")
    }
  }, [navigate])

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Memoire</h1>
              <p className="subtitle">Memorize and improve this daily task.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
