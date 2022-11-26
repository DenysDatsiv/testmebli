import React from "react";
import ProjectsLinkBtn from "../ProjectsLinkBtn/ProjectsLinkBtn";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProjectPage.module.css";

import { ProjectFiveImage } from "../../../ServiceData/FurnitureKeyServiceData";
function ProjectPageFive() {
  return (
    <div>
      <ProjectsLinkBtn />

      <Carousel variant="dark" fade>
        {ProjectFiveImage.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/FurnitureKey/ProjectFive/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД ВИКОРИСТАНО ФАРБОВАНІ
          МДФ ФАСАДИ, ПЛИТНІ МАТЕРІАЛИ EGGER,СТІЛЬНИЦЯ ВИГОТОВЛЕНА З
          КОМПАКТ-ПЛИТИ FUNDERMAX, ФУРНІТУРА ВІД ФІРМИ BLUM, LED-ПІДСВІТКА. ТАКОЖ
          ВИГОТОВЛЕНО ПРИХОЖУ, ПІДВІСНУ ТУМБУ ПІД TV, МЕБЛІ В ГАРДЕРОБНУ КІМНАТУ
          ТА У ВАННУ.
        </p>
      </div>
    </div>
  );
}

export default ProjectPageFive;
