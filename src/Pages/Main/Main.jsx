import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainPageCarouselServiceData } from "../../ServiceData/MainPageCarouselServiceData";
import SecondTextBlock from "../../Component/MainContent/PageText/SecondTextBlock/SecondTextBlock";
function Main() {
  return (
    <>
    <Carousel variant="dark" fade>
      {MainPageCarouselServiceData.map((element, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={require(`../../images/MainPageBigCarouse/${element.img}.jpg`)}
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
    <SecondTextBlock/>
    </>
  );
}

export default Main;
