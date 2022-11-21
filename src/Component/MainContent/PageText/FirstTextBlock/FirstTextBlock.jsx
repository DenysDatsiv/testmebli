import React from "react";
import styles from "./FirstTextBlock.module.css";
function FirstTextBlock() {
  return (
    <div className={styles.mainBlock}>
      <p className={styles.text}>
        Львівська майстерня меблів пропонує виготовлення корпусних меблів на
        замовлення.При розробці дизайн-проекту враховуємо всі ваші
        побажання.Надаємо кваліфіковану консультацію при виборі матеріалів і
        фурнітури.Вибираючи наші послуги,ви можете бути впевнені у високій
        якості виробів.
      </p>
    </div>
  );
}

export default FirstTextBlock;
