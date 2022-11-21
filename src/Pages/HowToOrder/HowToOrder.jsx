import React from "react";
import { HowToOrderServiceData } from "../../ServiceData/HowToOrderServiceData";
import styles from "./HowToOrder.module.css";
function HowToOrder() {
  return (
    <section className={styles.Block}>
    <div className={styles.mainBlock}>
      <p className={styles.header}>ЯК ЗАМОВИТИ</p>
      <ul>
        {HowToOrderServiceData.map((element, index) => (
          <li key={index} className={styles.steps}>
            <img
              className={styles.img}
              src={require(`../../images/HowToOrder/${element.img}.png`)}
              alt=""
            />

            <p className={styles.text}>{element.header}</p>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default HowToOrder;
