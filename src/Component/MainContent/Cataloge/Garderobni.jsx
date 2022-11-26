import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { GarderobniServiceData } from "../../../ServiceData/CatalogServiceData";
import CatalogLinkBtn from "../CatalogLinkBtn/CataloLinksBtn,";
import styles from "../Project/ProjectPage.module.css";

function Garderobni() {
  return (
    <div>
      <CatalogLinkBtn />

      <Carousel variant="dark" fade>
        {GarderobniServiceData.map((element, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`../../../images/Catalog/Garderbni/${element.img}.jpg`)}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>
          МЕБЛІ В ГАРДЕРОБНУ КІМНАТУ ДОЗВОЛЯТЬ ВАМ ЗРУЧНО ЗБЕРІГАТИ РЕЧІ
          ЕФЕКТИВНО ВИКОРИСТАВШИ ПРИМІЩЕННЯ. РОЗРОБИМО ПРОЕКТ З ВРАХУВАННЯМ ВАШИХ
          ПОБАЖАНЬ. ДОСТАВИМО І ВИКОНАЄМ ПРОФЕСІЙНИЙ МОНТАЖ. ТАКОЖ ВИ МОЖЕТЕ
          ЗАМОВИТИ МІЖКІМНАТНІ ПЕРЕГОРОДКИ.
        </p>
      </div>
    </div>
  );
}
export default Garderobni;
