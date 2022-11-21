import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShafaKupeServiceData } from "../../../ServiceData/CatalogServiceData";
import CatalogLinkBtn from "../CatalogLinkBtn/CataloLinksBtn,";
import styles from "../Project/ProjectPage.module.css"

function ShafaKupe() {
  return (
    <div>
    <CatalogLinkBtn/>
    <div className={styles.descriptionBlock}>
    <p className={styles.description}>ДЛЯ ВИГОТОВЛЕННЯ ШАФ-КУПЕ ВИКОРИСТОВУЄМ АЛЮМІНІЄВУ РОЗСУВНУ СИСТЕМУ.
ДЛЯ НАПОВНЕННЯ ФАСАДУ ПРОПОНУЄМ ДЗЕРКАЛО , СКЛО ЛАКОБЕЛЬ, ПІСКОМАТУВАННЯ,
ФОТОДРУК ТА ПЛИТНІ МАТЕРІАЛИ. ТАКОЖ Є МОЖЛИВІСТЬ ЗМОНТУВАТИ ПЛАВНИЙ 
ДОТЯГ ДВЕРЕЙ. НА КОРПУС  ВИКОРИСТОВУЄМ ПЛИТИ EGGER ТА SWISSKRONO.
</p></div>
      <Carousel variant="dark" fade>
        {ShafaKupeServiceData.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/Catalog/ShafaKupe/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
export default ShafaKupe;
