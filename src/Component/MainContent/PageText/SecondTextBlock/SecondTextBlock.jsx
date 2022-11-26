import React from "react";
import styles from "./SecondTextBlock.module.css";
function SecondTextBlock() {
  return (
    <div>
      <div className={styles.mainBlock}>
        <p className={styles.text}>
        Львівська майстерня меблів пропонує виготовлення корпусних меблів на
        замовлення. При розробці дизайн-проекту враховуємо всі ваші
        побажання. Надаємо кваліфіковану консультацію при виборі матеріалів і
        фурнітури. Вибираючи наші послуги, ви можете бути впевнені у високій
        якості виробів.
        </p>
      </div>
      <div>
        <h2 className={styles.header}>НАШІ ПЕРЕВАГИ</h2>
        <div className={styles.benefits}>
          <ul>
            <li>БЕЗКОШТОВНИЙ ВИЇЗД ЗАМІРНИКА НА ОБ'ЄКТ</li>
            <li>ВЕЛИКИЙ ДОСВІД РОБОТИ</li>
            <li>ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА</li>
            <li>БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ І КОШТОРИС</li>
            <li>ВИСОКА ЯКІСТЬ ЗА ПОМІРНУ ЦІНУ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondTextBlock;
