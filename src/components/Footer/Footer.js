import { Col, Container, Row } from "react-bootstrap";

const Footer = ({darkMode, setDarkMode}) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",backgroundColor: darkMode ? '#333' : '#f8f9fa',
        color: darkMode ? '#fff' : '#343a40',
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Cyber Note</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;