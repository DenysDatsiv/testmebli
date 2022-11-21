import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/Header/logo.jpg";
import call from "../../images/Footer/call.png";
import location from "../../images/Footer/location.png";
import mail from "../../images/Footer/mail.png";
function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerSubMain}>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.allcategories}>
          <div className={styles.categories}>
            <h5>КАТЕГОРІЇ</h5>
            <ul>
              <li>
                <a className={styles.categoriesItem} href="/furniture-key">
                  МЕБЛІ ПІД КЛЮЧ
                </a>
              </li>
              <li>
                <a className={styles.categoriesItem} href="/how-to-order">
                  ЯК ЗАМОВИТИ
                </a>
              </li>
              <li>
                <a className={styles.categoriesItem} href="/">
                 Каталог
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_categories}>
            <h5>КОНТАКТИ</h5>
            <div>
              <ul>
                <li>
                  <img src={mail} className={styles.icon} alt="mail"></img>

                  <a className={styles.categoriesItem} href="mailto: LVIV-MEBLI@UKR.NET">LVIV-MEBLI@UKR.NET</a>
                </li>
                <li>
                  <img src={call} className={styles.icon} alt="call"></img>
                  <a className={styles.categoriesItem} href="tel:0672739283">+380-67-273-92-83</a>
                </li>
                <li>
                  <img
                    src={location}
                    className={styles.icon}
                    alt="location"
                  ></img>
                  м.Львів
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
