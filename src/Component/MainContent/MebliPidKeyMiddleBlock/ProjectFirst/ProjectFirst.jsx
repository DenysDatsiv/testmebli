import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./../CarouselPosition.module.css"
import React, { useState } from 'react';
import { ProjectFirstImage } from "../../../../ServiceData/FurnitureKeyServiceData";
function ProjectFirst() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <p className={styles.header}>Проект  1</p>
        <Carousel interval={null} className={styles.CarouselPosition} activeIndex={index} onSelect={handleSelect}>
 {ProjectFirstImage.map((element, index) => (
      <Carousel.Item key={index}>
           <img
            className="d-block w-100"
            src={require(`../../../../images/FurnitureKey/ProjectFirst/${element.img}.jpg`)}
            alt=""
          />
        </Carousel.Item>
        ))}
     
    </Carousel>
    </div>
  );
}

export default ProjectFirst;
