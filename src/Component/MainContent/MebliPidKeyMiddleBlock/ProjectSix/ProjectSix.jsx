import Carousel from "react-bootstrap/Carousel";
import { ProjectSixImage } from "../../../../ServiceData/FurnitureKeyServiceData";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./../CarouselPosition.module.css"
import React, { useState } from 'react';

function ProjectSix() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <p className={styles.header}>Проект  6</p>
      <Carousel interval={null} className={styles.CarouselPosition} activeIndex={index} onSelect={handleSelect}>
 {ProjectSixImage.map((element, index) => (
      <Carousel.Item key={index}>
           <img
            className="d-block w-100"
            src={require(`../../../../images/FurnitureKey/ProjectSix/${element.img}.jpg`)}
            alt=""
          />
        </Carousel.Item>
        ))}
     
    </Carousel>
       </div>
  );
}
export default ProjectSix;
