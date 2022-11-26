import React from "react";
import ProjectsLinkBtn from "../ProjectsLinkBtn/ProjectsLinkBtn";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProjectPage.module.css";
import { ProjectThirdImage } from "../../../ServiceData/FurnitureKeyServiceData";

function ProjectPageThird() {
  return (
    <div>
      <ProjectsLinkBtn />
      <Carousel variant="dark" fade>
        {ProjectThirdImage.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/FurnitureKey/ProjectThird/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД ВИКОРИСТАНО МДФ
          ФАСАДИ ВІД AGT, ПЛИТНІ МАТЕРІАЛИ SWISSKRONO, ФУРНІТУРА ВІД ФІРМИ BLUM.
          ТАКОЖ ПЕРЕДБАЧЕНО LED-ПІДСВІТКУ. ШАФИ-КУПЕ В ПРИХОЖУ І СПАЛЬНЮ ІЗ
          АЛЮМІНІЄВОЇ РОЗСУВНОЇ СИСТЕМИ. ПЛИТНІ МАТЕРІАЛИ ВІД SWISSKRONO.
        </p>
      </div>
    </div>
  );
}

export default ProjectPageThird;
