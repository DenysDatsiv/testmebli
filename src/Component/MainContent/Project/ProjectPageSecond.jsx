import React from 'react';
import ProjectsLinkBtn from '../ProjectsLinkBtn/ProjectsLinkBtn';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProjectPage.module.css"
import { ProjectSecondImage } from '../../../ServiceData/FurnitureKeyServiceData';

function ProjectPageSecond() {
    return ( 
        <div>        
            <ProjectsLinkBtn/>
            <div className={styles.descriptionBlock}>
            <p className={styles.description}>В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД  ВИКОРИСТАНО 
ФАРБОВАНІ  МДФ ФАСАДИ, ПЛИТНІ  МАТЕРІАЛИІ EGGER, ФУРНІТУРА
ВІД ФІРМИ BLUM. ТАКОЖ ПЕРЕДБАЧЕНО LED-ПІДСВІТКУ. ШАФИ-КУПЕ В  ПРИХОЖУ І
 СПАЛЬНЮ ІЗ АЛЮМІНІЄВОЇ РОЗСУВНОЇ СИСТЕМИ. ПЛИТНІ МАТЕРІАЛИ ВІД SWISSKRONO
</p>
</div>
            <Carousel variant="dark" fade>
          {ProjectSecondImage.map((element, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={require(`../../../images/FurnitureKey/ProjectSecond/${element.img}.jpg`)}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div> 
        );
    }
    
export default ProjectPageSecond ;