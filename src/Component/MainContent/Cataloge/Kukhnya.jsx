import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Project/ProjectPage.module.css"
import { KukhniaServiceData } from "../../../ServiceData/CatalogServiceData";
import CatalogLinkBtn from "../CatalogLinkBtn/CataloLinksBtn,";
function Kukhni() {
  return (
    <div>
      <CatalogLinkBtn/>
      <div className={styles.descriptionBlock}>
      <p className={styles.description}>ДЛЯ ВИГОТОВЛЕННЯ КУХОНІ ПІД ЗАМОВЛЕННЯ ПРОПОНУЄМ НАШИМ КЛІЄНТАМ ВЕЛИКИЙ ВИБІР ФАСАДІВ, СТІЛЬНИЦЬ, ПЛИТНИХ МАТЕРІАЛІВ ТА ФУРНІТУРИ. РОЗРОБИМО
ІНДИВІДУАЛЬНИЙ ПРОЕКТ, ЯКИЙ БУДЕ ВІДПОВІДАТИ ВСІМ ВАШИМ ВИМОГАМ. ЗАВДЯКИ
ПРОФЕСІЙНОМУ МОНТАЖУ МЕБЛІ БУДУТЬ ГОТОВІ ДО ТРИВАЛОЇ ЕКСПЛУАТАЦІЇ.
</p>
      </div>
      <Carousel variant="dark" fade>
        {KukhniaServiceData.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/Catalog/Kukhnya/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Kukhni;
