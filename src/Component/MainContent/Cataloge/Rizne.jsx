import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {  RizneServiceData } from "../../../ServiceData/CatalogServiceData";
import CatalogLinkBtn from "../CatalogLinkBtn/CataloLinksBtn,";
import styles from "../Project/ProjectPage.module.css"

function Rizne() {
  return (
    <div>
     <CatalogLinkBtn/>
      <Carousel variant="dark" fade>
        {RizneServiceData.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/Catalog/Rizne/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.descriptionBlock}>
     <p className={styles.description}>
        У НАС МОЖНА ЗАМОВИТИ ВИГОТОВЛЕННЯ МЕБЛІВ У ДИТЯЧУ КІМНАТУ, МЕБЛІВ ДЛЯ
        ОФІСУ, МАГАЗИНУ ТА ІНШІ МЕБЛІ ПІД ЗАМОВЛЕННЯ. В НАС ВИ ОТРИМАЄТЕ
        ЯКІСНІ МЕБЛІ ЗА ОПТИМАЛЬНОЮ ЦІНОЮ, ШВИДКЕ ВИКОНАННЯ ЗАМОВЛЕНЬ ТА
        ПРОФЕСІЙНИЙ МОНТАЖ.
      </p>
      </div>
    </div>
  );
}
export default Rizne;
