import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import nishaImg from "./nisha_jpg.jpg";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <div className="doctor-portfolio">
      {/* Top Contact Bar */}
      <div className="top-contact-bar">
        <div className="top-contact-content">
          <span>+91 1234567890</span>
          <span>nisha@example.com</span>
        </div>
      </div>
      <div className="top-divider" />

      {/* Header with React-Bootstrap Navbar */}
      <Navbar bg="custom" expand="lg" sticky="top" className="navbar-custom">
        <Container className="navbar-container">
          <Navbar.Brand className="navbar-brand">
            <div className="logo-title">
              <h1>Dr. Nisha Maheshwari</h1>
              <p className="subtitle">Dentist</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggle-custom"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links-custom">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#appointment" className="book-btn">
                Book Appointment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Overlapping Image */}
      <section className="hero">
        <div className="hero-flex">
          <div className="hero-content">
            <h2>
              <span className="hero-label">A dedicated doctor</span>
              <br />
              <span className="hero-highlight">you can trust</span>
            </h2>
            <p className="hero-desc">
              Personalized care, expert diagnosis, and advanced cancer treatment
              options – all tailored for women’s health.
            </p>
            <a href="#appointment" className="book-btn">
              Book Appointment
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={nishaImg}
              alt="Dr. Nisha Maheshwari"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Container id="about" className="my-5">
        <div className="about-container">
          <h3 className="about-title text-center">Professional Summary</h3>
          <p className="about-text">
            Dr. Nisha Maheshwari joined Dr. Castel’s practice in early 2024,
            bringing a wealth of knowledge and a commitment to excellence in
            patient care. Her meticulous, kind and caring approach has earned
            her a reputation for delivering exceptional dental treatment
            tailored to each patient’s unique needs. Dr. Nisha is also a
            decorated professional, having received numerous prestigious awards,
            including OKU honors (awarded to the top 5% of students), the
            Periodontal Recognition Award, the Excellence in TMJ and Oral Facial
            Pain award by the AAOP, the Ismail Syed Memorial Award, and multiple
            scholarships from the Ohio Dental Association (ODA). She is also
            part of the ADA, ODA, and GCDS society.
            <br /> <br />
            Her dedication to dentistry is matched by her passion for creating a
            welcoming environment where patient comfort and care come first.
            Outside the office, Dr. Nisha enjoys spending time with her family,
            hiking, and playing badminton, embracing a balanced lifestyle that
            fosters both personal and professional growth.
          </p>
        </div>
      </Container>

      {/* Services Section */}
      <Container id="services" className="services-container my-5">
        <h3 className="services-title text-center mb-5">
          Experienced in Multiple Medical Practices
        </h3>
        <Row className="g-4">
          <Col md={6} lg={3} className="mb-4">
            <Card className="service-card h-100 border-0">
              <Card.Body>
                <Card.Title>Robotic Ovarian Cyst Surgery</Card.Title>
                <Card.Text>
                  Comprehensive care for ovarian cysts, including minimally
                  invasive and robotic techniques.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="service-card h-100 border-0">
              <Card.Body>
                <Card.Title>Robotic Myomectomy</Card.Title>
                <Card.Text>
                  Expert fibroid surgery, for pain relief and improved fertility
                  outcomes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="service-card h-100 border-0">
              <Card.Body>
                <Card.Title>Robotic Hysterectomy</Card.Title>
                <Card.Text>
                  Minimally invasive surgery for complex gynecological
                  conditions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="service-card h-100 border-0">
              <Card.Body>
                <Card.Title>Gynecologic Oncology</Card.Title>
                <Card.Text>
                  Management of cancers, precancerous lesions, and routine
                  check-ups.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Specialized Treatments Section */}
      <Container className="specialized-container my-5">
        <h3 className="specialized-title text-center mb-5">
          Specialized Cancer Treatments in Women
        </h3>
        <Row className="g-4">
          <Col md={6} lg={3} className="mb-4">
            <Card className="specialized-card h-100 border-0">
              <Card.Body>
                <Card.Title>Cervical Cancer</Card.Title>
                <Card.Text>
                  Advanced screening and treatment for cervical cancer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="specialized-card h-100 border-0">
              <Card.Body>
                <Card.Title>Breast Cancer</Card.Title>
                <Card.Text>
                  Comprehensive care for breast cancer patients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="specialized-card h-100 border-0">
              <Card.Body>
                <Card.Title>Ovarian Cancer</Card.Title>
                <Card.Text>
                  Expertise in diagnosis and management of ovarian cancer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="specialized-card h-100 border-0">
              <Card.Body>
                <Card.Title>Endometrial Cancer</Card.Title>
                <Card.Text>
                  Personalized treatment plans for endometrial cancer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="testimonials-container my-5">
        <h3 className="testimonials-title text-center mb-5">
          What Our Patients Say
        </h3>
        <Row className="g-4 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="testimonial-card h-100 border-0">
              <Card.Body>
                <Card.Text className="testimonial-text">
                  "The best doctor ever"
                </Card.Text>
                <Card.Text className="testimonial-author">- S. Jain</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="testimonial-card h-100 border-0">
              <Card.Body>
                <Card.Text className="testimonial-text">
                  "Caring, knowledgeable, and supportive throughout my
                  treatment."
                </Card.Text>
                <Card.Text className="testimonial-author">
                  - R. Sharma
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact & Footer */}
      <footer className="footer mt-5" id="contact">
        <Container>
          <Row className="footer-content py-5">
            <Col md={6} lg={6} className="mb-4 mb-md-0">
              <h5 className="footer-title">Contact Details</h5>
              <p>+91 1234567890</p>
              <p>nisha@example.com</p>
              <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
            </Col>
            <Col md={6} lg={6} className="mb-4 mb-md-0">
              <h5 className="footer-title">Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link href="#about" className="footer-link">
                  About
                </Nav.Link>
                <Nav.Link href="#services" className="footer-link">
                  Services
                </Nav.Link>
                <Nav.Link href="#appointment" className="footer-link">
                  Book Appointment
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
        <div className="footer-bottom py-3">
          <Container>
            <p className="mb-0">
              © 2026 Dr. Nisha Maheshwari. All rights reserved.
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default App;
