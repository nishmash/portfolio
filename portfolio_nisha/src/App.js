import "./App.css";
import nishaImg from "./nisha_jpg.jpg";

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

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-title">
            <h1>Dr. Nisha Maheshwari</h1>
            <p className="subtitle">Dentist</p>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#appointment" className="book-btn">
              Book Appointment
            </a>
          </nav>
        </div>
      </header>

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
      <section id="about" className="about">
        <h3>Professional Summary</h3>
        <p>
          Dr. Nisha Maheshwari joined Dr. Castel’s practice in early 2024,
          bringing a wealth of knowledge and a commitment to excellence in
          patient care. Her meticulous, kind and caring approach has earned her
          a reputation for delivering exceptional dental treatment tailored to
          each patient’s unique needs. Dr. Nisha is also a decorated
          professional, having received numerous prestigious awards, including
          OKU honors (awarded to the top 5% of students), the Periodontal
          Recognition Award, the Excellence in TMJ and Oral Facial Pain award by
          the AAOP, the Ismail Syed Memorial Award, and multiple scholarships
          from the Ohio Dental Association (ODA). She is also part of the ADA,
          ODA, and GCDS society.
          <br /> <br />
          Her dedication to dentistry is matched by her passion for creating a
          welcoming environment where patient comfort and care come first.
          Outside the office, Dr. Nisha enjoys spending time with her family,
          hiking, and playing badminton, embracing a balanced lifestyle that
          fosters both personal and professional growth.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h3>Experienced in Multiple Medical Practices</h3>
        <div className="service-list">
          <div className="service-item">
            <h4>Robotic Ovarian Cyst Surgery</h4>
            <p>
              Comprehensive care for ovarian cysts, including minimally invasive
              and robotic techniques.
            </p>
          </div>
          <div className="service-item">
            <h4>Robotic Myomectomy</h4>
            <p>
              Expert fibroid surgery, for pain relief and improved fertility
              outcomes.
            </p>
          </div>
          <div className="service-item">
            <h4>Robotic Hysterectomy</h4>
            <p>
              Minimally invasive surgery for complex gynecological conditions.
            </p>
          </div>
          <div className="service-item">
            <h4>Gynecologic Oncology</h4>
            <p>
              Management of cancers, precancerous lesions, and routine
              check-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Treatments Section */}
      <section className="specialized">
        <h3>Specialized Cancer Treatments in Women</h3>
        <div className="specialized-list">
          <div className="specialized-item">
            <h4>Cervical Cancer</h4>
            <p>Advanced screening and treatment for cervical cancer.</p>
          </div>
          <div className="specialized-item">
            <h4>Breast Cancer</h4>
            <p>Comprehensive care for breast cancer patients.</p>
          </div>
          <div className="specialized-item">
            <h4>Ovarian Cancer</h4>
            <p>Expertise in diagnosis and management of ovarian cancer.</p>
          </div>
          <div className="specialized-item">
            <h4>Endometrial Cancer</h4>
            <p>Personalized treatment plans for endometrial cancer.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3>What Our Patients Say</h3>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>“The best doctor ever”</p>
            <span>- S. Jain</span>
          </div>
          <div className="testimonial-item">
            <p>
              “Caring, knowledgeable, and supportive throughout my treatment.”
            </p>
            <span>- R. Sharma</span>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div>
            <h4>Contact Details</h4>
            <p>+91 1234567890</p>
            <p>nisha@example.com</p>
            <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <br />
            <a href="#services">Services</a>
            <br />
            <a href="#appointment">Book Appointment</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dr. Nisha Maheshwari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
