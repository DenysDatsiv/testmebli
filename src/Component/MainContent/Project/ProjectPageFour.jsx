import React from 'react';
import ProjectsLinkBtn from '../ProjectsLinkBtn/ProjectsLinkBtn';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProjectPage.module.css"
import { ProjectFourImage } from '../../../ServiceData/FurnitureKeyServiceData';
function ProjectPageFour() {
    return ( 
        <div>        
            <ProjectsLinkBtn/>
            <div className={styles.descriptionBlock}>
            <p className={styles.description}>В ДАНОМУ ПРОЕКТІ ДЛЯ ВИГОТОВЛЕННЯ КУХНІ НА ФАСАД  ВИКОРИСТАНО 
 МДФ ФАСАДИ ВІД AGT, КУХОНИИЙ ФАРТУХ ІЗ ГАРТОВАНОГО СКЛА, ФУРНІТУРА ВІД ФІРМИ
 BLUM,LED-ПІДСВІТКА. ШАФИ-КУПЕ В  ПРИХОЖУ ІЗ  АЛЮМІНІЄВОЇ РОЗСУВНОЇ СИСТЕМИ.
 НА МІЖКІМНАТНУ ПЕРЕГОРОДКУ ВИКОРИСТАНО  ГРАФІТОВЕ СКЛО
</p>
</div>
            <Carousel variant="dark" fade>
          {ProjectFourImage.map((element, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={require(`../../../images/FurnitureKey/ProjectFour/${element.img}.jpg`)}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div> 
        );
    }
    

export default ProjectPageFour ;