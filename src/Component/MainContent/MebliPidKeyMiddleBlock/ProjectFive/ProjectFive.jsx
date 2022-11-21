import Carousel from "react-bootstrap/Carousel";
import { ProjectFiveImage } from "../../../../ServiceData/FurnitureKeyServiceData";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./../CarouselPosition.module.css"
import React, { useState } from 'react';


function ProjectFive() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <p className={styles.header}>Проект  5</p>
    <Carousel interval={null} className={styles.CarouselPosition} activeIndex={index} onSelect={handleSelect}>
 {ProjectFiveImage.map((element, index) => (
      <Carousel.Item key={index}>
           <img
            className="d-block w-100"
            src={require(`../../../../images/FurnitureKey/ProjectFive/${element.img}.jpg`)}

            alt=""
          />
        </Carousel.Item>
        ))}
     
    </Carousel>
    </div>
  );
}
export default ProjectFive;
