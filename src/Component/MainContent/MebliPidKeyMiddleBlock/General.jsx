import React from "react";
import ProjectFirst from "./ProjectFirst/ProjectFirst";
import ProjectSecond from "./ProjectSecond/ProjectSecond";
import ProjectThird from "./ProjectThird/ProjectThird";
import ProjectFour from "./ProjectFour/ProjectFour";
import ProjectFive from "./ProjectFive/ProjectFive";
import ProjectSix from "./ProjectSix/ProjectSix";
import styles from "./General.module.css";
function FurnitureKeyBlock() {
  return (
    <div className={styles.GridBlock}>
      <a className={styles.Link} href="/project/first">
      <ProjectFirst className={styles.GridBlock_element} />
      </a>
      <a  className={styles.Link} href="/project/second">
      <ProjectSecond className={styles.GridBlock_element} />
      </a>
      <a  className={styles.Link} href="/project/third">
      <ProjectThird className={styles.GridBlock_element} />
      </a>
      <a className={styles.Link} href="/project/four">
      <ProjectFour className={styles.GridBlock_element} />
      </a>
      <a className={styles.Link} href="/project/five">
      <ProjectFive className={styles.GridBlock_element} />
      </a>
      <a className={styles.Link} href="/project/six">
      <ProjectSix className={styles.GridBlock_element} />
      </a>
    </div>
  );
}

export default FurnitureKeyBlock;
