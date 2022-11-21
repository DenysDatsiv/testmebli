import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { MebliUvannuServiceData } from "../../../ServiceData/CatalogServiceData";
import CatalogLinkBtn from "../CatalogLinkBtn/CataloLinksBtn,";
import styles from "../Project/ProjectPage.module.css";
function MebliUvannu() {
  return (
    <div>
      <CatalogLinkBtn />
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          ПРОПОНУЄМ ВИГОТОВЛЕННЯ МЕБЛІВ У ВАННУ КІМНАТИ. РОЗРОБИМО ПРОЕКТ З
          ВРАХУВАННЯМ ВАШИХ ПОБАЖАНЬ ТА ДОПОМОЖЕМ ПІДІБРАТИ МАТЕРІАЛИ І
          ФУРНІТУРУ. В НАС ВИ ОТРИМАЄТЕ ЯКІСНІ МЕБЛІ ЗА ОПТИМАЛЬНОЮ ЦІНОЮ.
          ШВИДКЕ ВИКОНАННЯ ЗАМОВЛЕНЬ ТА ПРОФЕСІЙНИЙ МОНТАЖ.
        </p>
      </div>
      <Carousel variant="dark" fade>
        {MebliUvannuServiceData.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/Catalog/MebliVanna/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MebliUvannu;
