import React from "react";
import ProjectsLinkBtn from "../ProjectsLinkBtn/ProjectsLinkBtn";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectPageCarousel.css"
import styles from "./ProjectPage.module.css"
import { ProjectFirstImage } from "../../../ServiceData/FurnitureKeyServiceData";
function ProjectPageFirst() {
  return (
    <div>
      <ProjectsLinkBtn />
      <div className={styles.descriptionBlock}>
      <p className={styles.description}>
        В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД ВИКОРИСТАНО ФАРБОВАНІ
        ФАСАДИ ІЗ ФРЕЗОВАНОЮ РУЧКОЮ, ПЛИТНІ МАТЕРІАЛИІ EGGER, ФУРНІТУРА ВІД
        ФІРМИ BLUM. ТАКОЖ ПЕРЕДБАЧЕНО LED-ПІДСВІТКУ. ДЛЯ ВИГОТОВЛЕННЯ ПРИХОЖОЇ І
        СПАЛЬНІ І ГАРДЕРОБНОЇ ВИКОРИТАНО МАТЕРІАЛИ ВІД EGGER.
      </p>
      </div>
      <Carousel nextIcon="" nextLabel="" className={styles.Carousel} variant="dark" fade>
        {ProjectFirstImage.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              id={styles.img}
              src={require(`../../../images/FurnitureKey/ProjectFirst/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectPageFirst;
