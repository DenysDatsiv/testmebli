import React from "react";
import styles from "./FirstTextBlock.module.css";
function FirstTextBlock() {
  return (
    <div className={styles.mainBlock}>
      <p className={styles.text}>
        У НАС ВИ МОЖЕТЕ ЗАМОВИТИ ВСІ МЕБЛІ ДЛЯ КВАРТИРИ ЧИ БУДИНКУ. МЕБЛІ, ЯК
        ОДНА З СКЛАДОВИХ НАВКОЛИШНЬОГО ІНТЕР'ЄРУ ОБОВ'ЯЗКОВО ПОВИНА БУТИ
        КОМФОРТНОЮ, ФУНКЦІОНАЛЬНОЮ ТА ГАРМОНІЙНО В НЬОГО ВПИСУВАТИСЬ. ТУТ
        НАЙКРАЩИЙ ВАРІАНТ - ІНДИВІДУАЛЬНЕ ПРОЕКТУВАННЯ МЕБЛІВ. МЕБЛІ ВИГОТОВЛЕНІ
        ЗА ІНДИВІДУАЛЬНИМ ПРОЕКТОМ В ПОЄДНАННІ ІЗ ВДАЛО ПІДІБРАНИМИ МАТЕРІАЛАМИ
        І ЯКІСНОЮ ФУРНІТУРОЮ СТВОРЮЮТЬ ГАРМОНІЙНИЙ ТА ЗРУЧНИЙ ІНТЕР'ЄР
      </p>
    </div>
  );
}

export default FirstTextBlock;
