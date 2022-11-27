import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavMenu.module.css";
import "./NavMenu.css";
import logo from "../../images/Header/logo.jpg";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  const [showcatalog, setShowcatalog] = useState("false");
  const [showmebli, setShowmebli] = useState(false);
  const showDropdown = (e) => {
    setShowcatalog(!showcatalog);
  };
  const hideDropdown = (e) => {
    setShowcatalog(false);
  };
  const showDropdownMebli = (e) => {
    setShowmebli(!showmebli);
  };
  const hideDropdownMebli = (e) => {
    setShowmebli(false);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container className={styles.mainBlock}>
        <Container className={styles.responsiveBlock}>
          <Container className={styles.logoBlock}>
            <Link to="/">
              <Image className={styles.logo} src={logo}></Image>
            </Link>
          </Container>
          <Navbar.Toggle
            className={styles.toggle}
            aria-controls="basic-navbar-nav"
          />
        </Container>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.NavigationMenu}
        >
          <Container className={styles.NavigationMenu_top}>
            <p className={styles.phoneNumber}>(067) 273-92-83</p>
            <div>
            <a href="https://www.facebook.com/lvmebli">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/lvmebli/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset=".328" stopColor="#ff543f"></stop>
                    <stop offset=".348" stopColor="#fc5245"></stop>
                    <stop offset=".504"stopColor="#e64771"></stop>
                    <stop offset=".643" stopColor="#d53e91"></stop>
                    <stop offset=".761" stopColor="#cc39a4"></stop>
                    <stop offset=".841" stopColor="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="#000"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stopColor="#4168c9"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                      fill="#CC39A4"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                     fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </a>
            </div>
          </Container>
          <Nav className="me-auto">
            <Nav.Link className={styles.TextNavigation} href="/furniture-key">
            МЕБЛІ "ПІД КЛЮЧ"
            </Nav.Link>

            <NavDropdown
              className={styles.TextNavigation}
              showcatalog={showcatalog}
              onMouseEnter={showDropdown}
              title={
                <span href="/cagtalo" className={styles.TextNavigation}>
                  КАТАЛОГ
                </span>
              }
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/catalog/kukhnya">КУХНІ</NavDropdown.Item>
              <NavDropdown.Item href="/catalog/shafa_kupe">
                ШАФИ-КУПЕ
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/garderobni">
                ГАРДЕРОБНІ
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/prykhozhi">
                ПРИХОЖІ
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/mebli_u_vannu">
                МЕБЛІ У ВАННУ
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/catalog/rizne"
              >
                РІЗНЕ
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className={styles.TextNavigation} href="/how-to-order">
              {" "}
              ЯК ЗАМОВИТИ
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;
