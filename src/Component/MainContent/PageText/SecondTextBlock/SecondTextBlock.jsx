import React from "react";
import styles from "./SecondTextBlock.module.css";
function SecondTextBlock() {
  return (
    <div>
      <div className={styles.mainBlock}>
        <p className={styles.text}>
          Львівська майстерня меблів - цевиробниу меблів з багаторічним
          досвідом.Займаємось виготовленням корпусних меблів на замовлення.Для
          виготовлення меблів використовуємо якісні матеріали провідних
          виробників і використовуємо надійну фурнітуру,проконсультуємо вас
          стосовно матеріалів і фурнітури ваших майбутніх меблів.
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
