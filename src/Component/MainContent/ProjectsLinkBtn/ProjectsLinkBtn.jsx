import React from "react";
import { ProjectPageLinkServiceData } from "../../../ServiceData/ProjectsLinkBtnServiceData";
import styles from "./ProjectLinkBtn.module.css"
function ProjectsLinkBtn() {
  return (
    <div className={styles.GeneralBlock} >
    <div  className={styles.linkBlock}>
      {ProjectPageLinkServiceData.map((element, index) => (
        <div className={styles.linkBlock} key={index}>

<a className={styles.linkButton} href={element.link}>{element.header}</a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProjectsLinkBtn;
