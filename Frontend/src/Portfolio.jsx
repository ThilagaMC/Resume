import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUserShield,
  faUsers,
  faRobot,
  faKey,
  faCode,
  faServer,
  faCertificate,
  faShieldAlt,
  faSyncAlt,
  faCogs, 
  faLock, 
  faLaptopCode,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// Import all images
import profilePic from "/Pictures/IMG_7609.JPG";
import lcmIcon from "../Pictures/LCM.svg";
import authIcon from "../Pictures/Authorization.png";
import mfaIcon from "../Pictures/MFA.png";
import roleIcon from "../Pictures/Role.png";
import identityIcon from "../Pictures/Identity.png";
import automationIcon from "../Pictures/automation.png";
import htmlIcon from "../Pictures/HTML.png";
import cssIcon from "../Pictures/css.png";
import jsIcon from "../Pictures/JS.png";
import reactIcon from "../Pictures/React.png";
import nodeIcon from "../Pictures/NodeJS.png";
import dbIcon from "../Pictures/DB.png";
import apiIcon from "../Pictures/RESTfulAPI.png";
import authAuthIcon from "../Pictures/Authetication&Authorization.png";
import javaIcon from "../Pictures/java.png";
import dsIcon from "../Pictures/DS.png";
import psIcon from "../Pictures/PS.png";
import cIcon from "../Pictures/c.png";
import oktaIcon from "../Pictures/okta.png";
import entraIcon from "../Pictures/EntaID.png";
import workflowIcon from "../Pictures/workflow.png";
import powerAutomateIcon from "../Pictures/PA.png";
import gitIcon from "../Pictures/Git.png";
import postmanIcon from "../Pictures/PostMan.png";
import { useState } from "react";
import axios from "axios";

function Portfolio() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  // Add state for alert and loading
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://resume-be-ifux.onrender.com/api/contact",
        formData
      );
      console.log("Response:", response.data);

      // Show success alert
      setAlert({
        show: true,
        message: "Message sent successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      // Show error alert
      setAlert({
        show: true,
        message:
          error.response?.data?.error ||
          "Error sending message. Please try again.",
        variant: "danger",
      });
    } finally {
      setIsLoading(false);

      // Reset form
      setFormData({
        userName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, message: "", variant: "" });
      }, 5000);
    }
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            <span style={{ color: "#37759e" }}>Thilagavathi</span> MC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#iam-skills">
                  IAM Skills
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#dev-skills">
                  Development
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#tools">
                  Tools
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#experience">
                  Work Experience
                </a>
              </li>

              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link px-3 py-2 rounded" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section py-5 bg-gradient-primary">

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 pe-lg-5">
              <h1 className="display-4 fw-bold mb-4">
                <span className="text-highlight">Hello, I'm</span>{" "}
                <span style={{ color: "#343a40" }}>Thilagavathi MC</span>
              </h1>
              <p className="lead mb-4 text-light-emphasis">
                <span className="badge bg-primary-gradient fs-6 fw-normal mb-3">
                  Identity & Access Management Engineer
                </span>
              </p>
              <p className="mb-4 fs-5 text-dark">
                I am an IAM Engineer with 2+ years of experience in identity
                lifecycle management, automation, and secure access control. I
                specialize in IAM automation, user provisioning, and API
                integrations. Alongside my IAM expertise, I have Full Stack
                Development skills, enabling me to build secure, scalable
                applications that integrate seamlessly with identity solutions.
              </p>
              <div className="values-box p-4 rounded bg-dark-soft border-start border-3 border-primary">
                <h4 className="h5 mb-3 text-light">
                  <FontAwesomeIcon icon={faShieldAlt} className="me-2" />{" "}
                  Professional Values
                </h4>
                <p className="mb-0 text-light-emphasis">
                  I believe in{" "}
                  <strong style={{ color: "#343a40" }}>
                    security-first design
                  </strong>
                  ,{" "}
                  <strong style={{ color: "#343a40" }}>
                    automation excellence
                  </strong>
                  , and
                  <strong style={{ color: "#343a40" }}>
                    {" "}
                    continuous improvement
                  </strong>{" "}
                  to deliver identity solutions that protect while enabling
                  business growth.
                </p>
              </div>

              <div className="mt-4 btn-group-hero">
  <a href="#contact" className="btn btn-hero btn-hero-primary m-1">
    Contact Me
  </a>
  <a href="#project" className="btn btn-hero btn-hero-primary m-1">
    View Projects
  </a>
  <a 
    href="../public/Thilagavathi - Resume.pdf" 
    download="Thilagavathi_Resume.pdf"
    className="btn btn-hero btn-hero-primary m-1"
  >
    Download Resume
  </a>
</div>

            </div>
            <div className="col-lg-4 mt-5 mt-lg-0 text-center">
              <div className="profile-frame position-relative">
                <img
                  src={profilePic}
                  alt="Thilagavathi MC"
                  className="profile-img img-fluid rounded-4 shadow-lg"
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 border border-3 border-primary rounded-4"
                  style={{ zIndex: -1, transform: "translate(15px, 15px)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* IAM Skills Section */}
      <section id="iam-skills" className="py-5 bg-light">
        <div className="container py-4">

          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">IAM Expertise</h2>
            <p className="lead text-muted">
              Specialized skills in Identity and Access Management
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={lcmIcon}
                      alt="Identity Lifecycle Management"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">
                    Identity Lifecycle Management
                  </h5>
                  <p className="card-text text-muted">
                    Comprehensive management of digital identities from
                    onboarding to offboarding, ensuring proper access
                    provisioning and timely deprovisioning across all enterprise
                    systems.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">
                      JIT Provisioning
                    </span>
                    <span className="badge bg-light text-dark">SCIM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={authIcon}
                      alt="Authorization Protocols"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">Authorization Protocols</h5>
                  <p className="card-text text-muted">
                    Implementation of industry-standard protocols including
                    OAuth 2.0, OpenID Connect, and SAML 2.0 to enable secure
                    authentication and fine-grained authorization.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">
                      OAuth 2.0
                    </span>
                    <span className="badge bg-light text-dark">SAML</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={mfaIcon}
                      alt="Multi-Factor Authentication"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">
                    Multi-Factor Authentication
                  </h5>
                  <p className="card-text text-muted">
                    Deployment of adaptive MFA solutions incorporating
                    biometrics, hardware tokens, and mobile authenticators to
                    strengthen authentication security.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">FIDO2</span>
                    <span className="badge bg-light text-dark">WebAuthn</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={roleIcon}
                      alt="RBAC & ABAC"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">RBAC & ABAC</h5>
                  <p className="card-text text-muted">
                    Design and implementation of both Role-Based and
                    Attribute-Based Access Control models, with dynamic policy
                    evaluation and just-in-time privilege assignment.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">
                      Policies
                    </span>
                    <span className="badge bg-light text-dark">
                      Least Privilege
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={identityIcon}
                      alt="Identity Federation"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">Identity Federation</h5>
                  <p className="card-text text-muted">
                    Configuration of cross-domain identity solutions enabling
                    seamless SSO across multiple security domains while
                    maintaining strict access controls.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">SAML</span>
                    <span className="badge bg-light text-dark">OIDC</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                    <img
                      src={automationIcon}
                      alt="Automation"
                      className="skill-icon"
                    />
                  </div>
                  <h5 className="card-title mb-3">IAM Automation</h5>
                  <p className="card-text text-muted">
                    Development of automated identity workflows leveraging APIs
                    and event-driven architectures to streamline provisioning
                    and access management processes.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-light text-dark me-1">
                      Workflows
                    </span>
                    <span className="badge bg-light text-dark">Webhooks</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Development Skills Section */}
      <section id="dev-skills" className="py-5 bg-white">

        <div className="container py-4">

          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
            <p className="lead text-muted">
              Full stack development capabilities
            </p>
          </div>

          <ul
            className="nav nav-pills mb-5 justify-content-center"
            id="skillsTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active px-4 py-2"
                id="frontend-tab"
                data-bs-toggle="pill"
                data-bs-target="#frontend"
                type="button"
                role="tab"
                aria-controls="frontend"
                aria-selected="true"
              >
                <FontAwesomeIcon icon={faCode} className="me-2" /> Frontend
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link px-4 py-2"
                id="backend-tab"
                data-bs-toggle="pill"
                data-bs-target="#backend"
                type="button"
                role="tab"
                aria-controls="backend"
                aria-selected="false"
              >
                <FontAwesomeIcon icon={faServer} className="me-2" /> Backend
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link px-4 py-2"
                id="other-tab"
                data-bs-toggle="pill"
                data-bs-target="#other"
                type="button"
                role="tab"
                aria-controls="other"
                aria-selected="false"
              >
                <FontAwesomeIcon icon={faCogs} className="me-2" /> Programming
              </button>
            </li>
          </ul>

          <div className="tab-content" id="skillsTabContent">
            <div
              className="tab-pane fade show active"
              id="frontend"
              role="tabpanel"
              aria-labelledby="frontend-tab"
            >
              <div className="row g-4">

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={htmlIcon}
                          alt="HTML5"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">HTML5</h5>
                      <p className="card-text text-muted">
                        Semantic HTML5 markup with WAI-ARIA for accessibility
                        and SEO optimization.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Accessibility
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img src={cssIcon} alt="CSS3" className="skill-icon" />
                      </div>
                      <h5 className="card-title mb-3">CSS3</h5>
                      <p className="card-text text-muted">
                        Modern CSS including Flexbox, Grid, animations, and
                        responsive design patterns.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={jsIcon}
                          alt="JavaScript"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">JavaScript (ES6+)</h5>
                      <p className="card-text text-muted">
                        Modern JavaScript including async/await, modules, and
                        functional programming patterns.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">ES6+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={reactIcon}
                          alt="React.js"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">React.js</h5>
                      <p className="card-text text-muted">
                        Building component-based UIs with hooks, context API,
                        and performance optimization.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">Hooks</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div
              className="tab-pane fade"
              id="backend"
              role="tabpanel"
              aria-labelledby="backend-tab"
            >
              <div className="row g-4">

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={nodeIcon}
                          alt="Node.js"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">Node.js</h5>
                      <p className="card-text text-muted">
                        Building scalable server-side applications with Express,
                        middleware, and RESTful endpoints.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Express
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={dbIcon}
                          alt="MongoDB"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">MongoDB</h5>
                      <p className="card-text text-muted">
                        NoSQL database design with Mongoose ODM, indexing, and
                        aggregation pipelines.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Mongoose
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={apiIcon}
                          alt="RESTful APIs"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">RESTful APIs</h5>
                      <p className="card-text text-muted">
                        Design and implementation of RESTful services with
                        proper versioning and documentation.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Swagger
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={authAuthIcon}
                          alt="Authentication"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">API Security</h5>
                      <p className="card-text text-muted">
                        Implementing JWT, OAuth 2.0, and API gateways for secure
                        service-to-service communication.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">JWT</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div
              className="tab-pane fade"
              id="other"
              role="tabpanel"
              aria-labelledby="other-tab"
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img src={javaIcon} alt="Java" className="skill-icon" />
                      </div>
                      <h5 className="card-title mb-3">Java</h5>
                      <p className="card-text text-muted">
                        Object-oriented programming with Spring framework for
                        enterprise applications.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">Spring</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={dsIcon}
                          alt="Data Structures"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">Data Structures</h5>
                      <p className="card-text text-muted">
                        Implementation of efficient data structures and
                        algorithms for optimized performance.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Algorithms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={psIcon}
                          alt="PowerShell"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">PowerShell</h5>
                      <p className="card-text text-muted">
                        Scripting for automation, system administration, and
                        security tasks in Windows environments.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">
                          Automation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="card h-100 skill-card border-0 shadow-sm hover-lift">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper bg-primary-soft mb-4 mx-auto rounded-3">
                        <img
                          src={cIcon}
                          alt="C Programming"
                          className="skill-icon"
                        />
                      </div>
                      <h5 className="card-title mb-3">C Programming</h5>
                      <p className="card-text text-muted">
                        Low-level programming including memory management,
                        pointers, and system programming.
                      </p>
                      <div className="mt-3">
                        <span className="badge bg-light text-dark">System</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-5 bg-light">

        <div className="container py-4">
          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">IAM Tools & Technologies</h2>
            <p className="lead text-muted">
              Key platforms and solutions I work with
            </p>
          </div>

          <div
            id="toolsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="3"
              ></button>
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="4"
              ></button>
              <button
                type="button"
                data-bs-target="#toolsCarousel"
                data-bs-slide-to="5"
              ></button>
            </div>

            <div className="carousel-inner rounded-4 overflow-hidden">
              {/* Okta Card */}
              <div className="carousel-item active">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={oktaIcon}
                        alt="Okta"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">Okta Identity Cloud</h3>
                    <p className="mb-4">
                      Extensive experience with Okta's identity solutions
                      including:
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        Workflows
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Universal Directory
                      </span>
                      <span className="badge bg-white text-dark py-2">SSO</span>
                      <span className="badge bg-white text-dark py-2">MFA</span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Integrated Okta with 10+ enterprise applications for
                      seamless authentication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Microsoft Entra Card */}
              <div className="carousel-item">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={entraIcon}
                        alt="Microsoft Entra"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">Microsoft Entra ID</h3>
                    <p className="mb-4">
                      Implemented and managed Entra ID solutions including:
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        Conditional Access
                      </span>
                      <span className="badge bg-white text-dark py-2">PIM</span>
                      <span className="badge bg-white text-dark py-2">B2B</span>
                      <span className="badge bg-white text-dark py-2">B2C</span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Configured policies for 500+ users across hybrid
                      environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Okta Workflows Card */}
              <div className="carousel-item">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={workflowIcon}
                        alt="Okta Workflows"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">Okta Workflows</h3>
                    <p className="mb-4">Automated identity processes using:</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        User Provisioning
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        De-provisioning
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Custom Connectors
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Approval Flows
                      </span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Built 15+ workflows reducing manual tasks by 70%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Power Automate Card */}
              <div className="carousel-item">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={powerAutomateIcon}
                        alt="Power Automate"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">Microsoft Power Automate</h3>
                    <p className="mb-4">Created automation solutions for:</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        Account Management
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Access Requests
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Approval Workflows
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Notifications
                      </span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Automated 20+ identity processes saving 15 hours/week.
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="carousel-item">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={gitIcon}
                        alt="GitHub"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">GitHub</h3>
                    <p className="mb-4">Managed IAM automation code with:</p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        Version Control
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        CI/CD
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Actions
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Security Scanning
                      </span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Maintained 10+ repositories for IAM scripts and
                      configurations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Postman Card */}
              <div className="carousel-item">
                <div className="card border-0 shadow-lg h-100 bg-gradient-dark text-white">
                  <div className="card-body text-center p-5">
                    <div className="tool-icon-container mb-4 mx-auto bg-white rounded-circle p-4">
                      <img
                        src={postmanIcon}
                        alt="Postman"
                        className="img-fluid"
                        style={{ height: "60px" }}
                      />
                    </div>
                    <h3 className="mb-3">Postman</h3>
                    <p className="mb-4">
                      Developed and tested IAM APIs including:
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                      <span className="badge bg-white text-dark py-2">
                        Okta API
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Graph API
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        SCIM
                      </span>
                      <span className="badge bg-white text-dark py-2">
                        Webhooks
                      </span>
                    </div>
                    <p className="mb-0 opacity-75">
                      Created 25+ API collections for identity management
                      workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#toolsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#toolsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Protocols Section Below Carousel */}
          <div className="mt-5 pt-4 text-center">
            <h4 className="mb-4 fw-bold">IAM Protocols & Standards</h4>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faCertificate} className="me-1" /> OAuth
                2.0
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faCertificate} className="me-1" /> OpenID
                Connect
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faCertificate} className="me-1" /> SAML
                2.0
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faSyncAlt} className="me-1" /> SCIM
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faShieldAlt} className="me-1" /> LDAP
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faUserShield} className="me-1" /> RBAC
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faUserShield} className="me-1" /> ABAC
              </span>
              <span className="badge bg-dark py-2 px-3">
                <FontAwesomeIcon icon={faShieldAlt} className="me-1" /> FIDO2
              </span>
            </div>
          </div>
        </div>

      </section>

{/* Experience Section */}
<section id="experience" className="py-5 bg-white">
  <div className="container py-4">
    <div className="section-header text-center mb-5">
      <h2 className="display-5 fw-bold mb-3">Professional Journey</h2>
      <p className="lead text-muted">Blending security engineering with full-stack development</p>
    </div>

    <div className="timeline">
      
      {/* LTIMindtree */}
      <div className="timeline-item">
        <div className="card border-0 shadow-sm hover-lift mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary-soft rounded-3 p-2 me-3">
                <FontAwesomeIcon icon={faShieldAlt} className="text-primary" />
              </div>
              <div>
                <h4 className="mb-0">Information Security Consultant</h4>
                <p className="text-muted mb-0">LTIMindtree | May 2025 – Present</p>
              </div>
            </div>
            <ul className="mb-0 ps-3">
              <li className="mb-2">Implementing IAM solutions to support secure access across enterprise systems</li>
              <li className="mb-2">Working on automation of user lifecycle and access governance using Okta & Power Automate</li>
              <li>Collaborating with teams to design security-first development workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Freelancing */}
      <div className="timeline-item">
        <div className="card border-0 shadow-sm hover-lift mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary-soft rounded-3 p-2 me-3">
                <FontAwesomeIcon icon={faLaptopCode} className="text-primary" />
              </div>
              <div>
                <h4 className="mb-0">Creative Designer & MERN Developer</h4>
                <p className="text-muted mb-0">Self Employed | November 2024 – April 2025</p>
              </div>
            </div>
            <ul className="mb-0 ps-3">
              <li className="mb-2">Built a full-stack interactive app with React, Node.js, and Express</li>
              <li className="mb-2">Designed clean, responsive UI/UX with optimized performance</li>
              <li>Enabled seamless data flow and real-time interaction using REST APIs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AVASOFT – Security Engineer */}
      <div className="timeline-item">
        <div className="card border-0 shadow-sm hover-lift mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary-soft rounded-3 p-2 me-3">
                <FontAwesomeIcon icon={faLock} className="text-primary" />
              </div>
              <div>
                <h4 className="mb-0">Security Engineer</h4>
                <p className="text-muted mb-0">AVASOFT | July 2023 – October 2024</p>
              </div>
            </div>
            <ul className="mb-0 ps-3">
              <li className="mb-2">Contributed to internal tooling and secure app development</li>
              <li className="mb-2">Streamlined IAM ticket resolution via Power Automate integration</li>
              <li className="mb-2">Implemented security best practices in development workflows</li>
              <li className="mb-2">Worked closely with IAM engineers to integrate backend logic into access workflows</li>
              <li className="mb-2">Supported audits and role-based access control implementations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AVASOFT – Cybersecurity Trainee */}
      <div className="timeline-item">
        <div className="card border-0 shadow-sm hover-lift">
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary-soft rounded-3 p-2 me-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-primary" />
              </div>
              <div>
                <h4 className="mb-0">Cybersecurity Trainee</h4>
                <p className="text-muted mb-0">AVASOFT | January 2023 – June 2023</p>
              </div>
            </div>
            <ul className="mb-0 ps-3">
  <li className="mb-2">Assisted in implementing and testing IAM workflows including user provisioning and access review processes</li>
  <li className="mb-2">Worked on endpoint security hardening and monitored policy compliance across systems</li>
  <li className="mb-2">Supported VAPT (Vulnerability Assessment & Penetration Testing) by preparing test environments and analyzing security reports</li>
  <li className="mb-2">Helped configure and monitor email security solutions to detect phishing and spam attempts</li>
  <li className="mb-2">Gained knowledge experience with firewall rules, VPN, and basic network security configurations</li>
</ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="project" className="py-5 bg-white">

        <div className="container py-4">
          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Professional Projects</h2>
            <p className="lead text-muted">
              Key contributions and implementations
            </p>
          </div>

          {/* IAM Projects Section */}
          <div className="mb-5">
            <h4 className="mb-4 pb-2 border-bottom">IAM Projects</h4>
            <div className="accordion" id="iamProjectsAccordion">
              
              {/* Project 1 */}
              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed py-3 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <FontAwesomeIcon
                      icon={faUserShield}
                      className="me-3 text-primary"
                    />
                    User Lifecycle Management Automation
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#iamProjectsAccordion"
                >
                  <div className="accordion-body bg-light">
                    <h5 className="mb-3">Project Overview</h5>
                    <p className="mb-4">
                      Designed and implemented an automated user lifecycle
                      management system for a multinational corporation with
                      2,000+ employees, reducing manual provisioning tasks by
                      80% and improving security through timely deprovisioning.
                    </p>

                    <h5 className="mb-3">Key Achievements</h5>
                    <ul className="mb-4">
                      <li className="mb-2">
                        Integrated with HRIS systems for real-time user status
                        updates
                      </li>
                      <li className="mb-2">
                        Implemented automated access certification campaigns
                      </li>
                      <li className="mb-2">
                        Reduced onboarding time from 48 hours to under 2 hours
                      </li>
                      <li className="mb-2">
                        Achieved 99.9% accuracy in access provisioning
                      </li>
                    </ul>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Okta Workflows
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        SCIM
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        PowerShell
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        REST APIs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed py-3 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="me-3 text-primary"
                    />
                    Customer Identity Solution
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#iamProjectsAccordion"
                >
                  <div className="accordion-body bg-light">
                    <h5 className="mb-3">Project Overview</h5>
                    <p className="mb-4">
                      Architected and deployed a customer identity and access
                      management (CIAM) platform for a B2C e-commerce
                      application serving 50,000+ users, enabling seamless
                      customer experiences while maintaining strict security
                      controls.
                    </p>

                    <h5 className="mb-3">Key Achievements</h5>
                    <ul className="mb-4">
                      <li className="mb-2">
                        Implemented social login with Google, Facebook, and
                        Apple
                      </li>
                      <li className="mb-2">
                        Developed progressive profiling to improve conversion
                        rates
                      </li>
                      <li className="mb-2">
                        Reduced password reset tickets by 75% with self-service
                        flows
                      </li>
                      <li className="mb-2">
                        Implemented risk-based authentication to reduce fraud
                      </li>
                    </ul>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary-gradient py-2 px-3">
                        OAuth 2.0
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        SAML
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        MFA
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Okta
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed py-3 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <FontAwesomeIcon
                      icon={faKey}
                      className="me-3 text-primary"
                    />
                    Enterprise Password Management
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#iamProjectsAccordion"
                >
                  <div className="accordion-body bg-light">
                    <h5 className="mb-3">Project Overview</h5>
                    <p className="mb-4">
                      Led the enterprise-wide deployment of 1Password for
                      Business across a 500-employee organization, implementing
                      secure password management practices and reducing
                      credential compromise incidents by 90%.
                    </p>

                    <h5 className="mb-3">Key Achievements</h5>
                    <ul className="mb-4">
                      <li className="mb-2">
                        Implemented SCIM provisioning for automated user
                        management
                      </li>
                      <li className="mb-2">
                        Created role-based access controls for sensitive vaults
                      </li>
                      <li className="mb-2">
                        Developed automated provisioning workflows
                      </li>
                      <li className="mb-2">
                        Conducted security training for all employees
                      </li>
                    </ul>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary-gradient py-2 px-3">
                        1Password
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        SCIM
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Training
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        RBAC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="accordion-item border-0 shadow-sm">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed py-3 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <FontAwesomeIcon
                      icon={faRobot}
                      className="me-3 text-primary"
                    />
                    IAM Process Automation
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#iamProjectsAccordion"
                >
                  <div className="accordion-body bg-light">
                    <h5 className="mb-3">Project Overview</h5>
                    <p className="mb-4">
                      Spearheaded the automation of critical IAM processes
                      across multiple environments, eliminating manual
                      intervention and reducing operational overhead by 65%
                      while improving compliance with audit requirements.
                    </p>

                    <h5 className="mb-3">Key Achievements</h5>
                    <ul className="mb-4">
                      <li className="mb-2">
                        Automated user deactivation across non-production
                        environments
                      </li>
                      <li className="mb-2">
                        Implemented self-service role and access request
                        workflows
                      </li>
                      <li className="mb-2">
                        Created automated distribution list management
                      </li>
                      <li className="mb-2">
                        Developed shared mailbox provisioning automation
                      </li>
                    </ul>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary-gradient py-2 px-3">
                        PowerShell
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Okta Workflows
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Power Automate
                      </span>
                      <span className="badge bg-primary-gradient py-2 px-3">
                        Graph API
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Stack Projects Section */}
          <div>
            <h4 className="mb-4 pb-2 border-bottom">Full Stack Projects</h4>

            <div className="row g-4">

              {/* Project 1 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-white border-bottom-0 py-3">
                    <strong>EmotionEase - Mental welfare website</strong>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">
                       A mental wellness platform offering personalized emotional support and therapy sessions. Designed with a calming interface, it helps users navigate stress, relationships, and self-growth with expert guidance.
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-secondary py-2">React</span>
                        <span className="badge bg-secondary py-2">Node.js</span>
                        <span className="badge bg-secondary py-2">
                          Express JS
                        </span>
                        <span className="badge bg-secondary py-2">MongoDB</span>
                      </div>
                      <a
                        href="https://emotionease.in"
                        className="btn btn-primary w-100"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-white border-bottom-0 py-3">
                    <strong>CrewConnect - Employee Portal</strong>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">
                      A comprehensive employee portal for tracking attendance,
                      tasks, leave requests, and other HR-related functions with
                      real-time updates.
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-secondary py-2">React</span>
                        <span className="badge bg-secondary py-2">Node.js</span>
                        <span className="badge bg-secondary py-2">
                          Express JS
                        </span>
                        <span className="badge bg-secondary py-2">MongoDB</span>
                      </div>
                      <a
                        href="https://crewconnect-employeeportal.netlify.app"
                        className="btn btn-primary w-100"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-white border-bottom-0 py-3">
                    <strong>Portfolio Website</strong>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">
                      A modern responsive portfolio showcasing IAM expertise and
                      full-stack projects, featuring interactive elements and
                      clean design.
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-secondary py-2">React</span>
                        <span className="badge bg-secondary py-2">
                          Bootstrap
                        </span>
                        <span className="badge bg-secondary py-2">Netlify</span>
                      </div>
                      <a
                        href="https://fantastic-piroshki-971829.netlify.app/"
                        className="btn btn-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-white border-bottom-0 py-3">
                    <strong>Mini Projects Collection</strong>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">
                      Explore various small-scale projects and code experiments
                      demonstrating different aspects of web development and
                      problem-solving skills.
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-secondary py-2">React</span>
                        <span className="badge bg-secondary py-2">
                          JavaScript
                        </span>
                        <span className="badge bg-secondary py-2">
                          HTML/CSS
                        </span>
                      </div>
                      <div className="d-grid gap-2">
                        <a
                          href="https://github.com/ThilagaMC"
                          className="btn btn-primary w-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} className="me-2" />
                          View My GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container py-4">

          <div className="section-header text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-5">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h4 className="card-title mb-4 text-primary">
                        Contact Information
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <a
                            href="mailto:thilaga2k2@gmail.com"
                            className="text-decoration-none d-flex align-items-center text-dark"
                          >
                            <div className="icon-wrapper bg-primary-soft rounded-circle me-3 p-2">
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-primary"
                              />
                            </div>
                            thilaga2k2@gmail.com
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="tel:+919381659870"
                            className="text-decoration-none d-flex align-items-center text-dark"
                          >
                            <div className="icon-wrapper bg-primary-soft rounded-circle me-3 p-2">
                              <FontAwesomeIcon
                                icon={faPhone}
                                className="text-primary"
                              />
                            </div>
                            +91 9381659870
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://www.linkedin.com/in/mc-thilaga/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none d-flex align-items-center text-dark"
                          >
                            <div className="icon-wrapper bg-primary-soft rounded-circle me-3 p-2">
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-primary"
                              />
                            </div>
                            LinkedIn Profile
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://github.com/ThilagaMC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none d-flex align-items-center text-dark"
                          >
                            <div className="icon-wrapper bg-primary-soft rounded-circle me-3 p-2">
                              <FontAwesomeIcon
                                icon={faGithub}
                                className="text-primary"
                              />
                            </div>
                            GitHub Profile
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h4 className="card-title mb-4 text-primary">
                        Send a Message
                      </h4>

                      {/* Alert notification */}
                      {alert.show && (
                        <div
                          className={`alert alert-${alert.variant} alert-dismissible fade show`}
                          role="alert"
                        >
                          {alert.message}
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setAlert({ show: false })}
                          ></button>
                        </div>
                      )}

                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-2 fw-bold"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Processing...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 fs-5">
                &copy; {new Date().getFullYear()} Thilagavathi MC. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <a
                href="https://www.linkedin.com/in/mc-thilaga/"
                className="text-white me-3 social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="fa-xl" />
              </a>
              <a
                href="https://github.com/ThilagaMC"
                className="text-white me-3 social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-xl" />
              </a>
              <a
                href="mailto:thilaga2k2@gmail.com"
                className="text-white me-3 social-icon"
              >
                <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
              </a>
              <a href="tel:+919381659870" className="text-white social-icon">
                <FontAwesomeIcon icon={faPhone} className="fa-xl" />
              </a>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Portfolio;
