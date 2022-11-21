import React from "react";
import { CatalogLinkBtnServiceData } from "../../../ServiceData/CatalogData/CatalogLinkBtnServiceData";
import styles from "../ProjectsLinkBtn/ProjectLinkBtn.module.css"

function CatalogLinkBtn() {
  return (
    <div  className={styles.linkBlock}>
      {CatalogLinkBtnServiceData.map((element, index) => (
        <div className={styles.linkBlock} key={index}>

<a className={styles.linkButton} href={element.link}>{element.header}</a>
        </div>
      ))}
    </div>
  );
}

export default CatalogLinkBtn;
