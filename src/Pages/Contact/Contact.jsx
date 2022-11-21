import React from "react";
import styles from "./Contact.module.css"
import { ContactServiceData } from "../../ServiceData/ContactServiceData";
function Contact() {
  return (
    <div className={styles.ContactInformationMain}>
    <h2 className={styles.mainHeader}>КОНТАКТНІ ДАНІ</h2>
    <div className={styles.contactInfoblockMin}>
    {ContactServiceData.map((el, idx) => (
      <div className={styles.contactInfoblock} key={idx}>
        <p className={styles.subHeader}>{el.header}</p>
        <div>
          <p className={styles.subtext}>{el.infoFirst}</p>
          <p className={styles.subtext}>{el.infoSecond}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
}

export default Contact;
