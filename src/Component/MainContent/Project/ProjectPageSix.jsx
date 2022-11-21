import React from 'react';
import ProjectsLinkBtn from '../ProjectsLinkBtn/ProjectsLinkBtn';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProjectPage.module.css"
import { ProjectSixImage } from '../../../ServiceData/FurnitureKeyServiceData';

function ProjectPageSix() {
    return ( 
        <div>        
            <ProjectsLinkBtn/>
            <div className={styles.descriptionBlock}>
               <p className={styles.description}>В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД  ВИКОРИСТАНО АКРИЛОВІ ПАНЕЛІ
NIEMANN, ПЛИТНІ МАТЕРІАЛИ EGGER,СТІЛЬНИЦЯ ВИГОТОВЛЕНА З КОМПАКТ-ПЛИТИ
 FUNDERMAX, ФУРНІТУРА ВІД ФІРМИ BLUM,LED-ПІДСВІТКА. ТАКОЖ ВИГОТОВЛЕНО  ПРИХОЖУ,
ТУМБУ ПІД TV, МЕБЛІ В СПАЛЬНЮ, ДИТЯЧУ ТА НА БАЛКОН.
</p>
</div>
            <Carousel variant="dark" fade>
          {ProjectSixImage.map((element, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={require(`../../../images/FurnitureKey/ProjectSix/${element.img}.jpg`)}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div> 
        );
    }
    

export default ProjectPageSix;
