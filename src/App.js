import styles from "./App.module.css";
import NavigationMenu from "./Component/Header/NavMenu";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FurnitureKey from "./Pages/FurnitureKey/FurnitureKey";
import Contact from "./Pages/Contact/Contact";
import HowToOrder from "./Pages/HowToOrder/HowToOrder";
import Catalog from "./Pages/Catalog/Catalog";
import Footer from "./Component/Footer/Footer";
import GetConsultation from "./Component/MainContent/GetConsultation/GetConsultatin";
import FirstTextBlock from "./Component/MainContent/PageText/FirstTextBlock/FirstTextBlock";
import ProjectPageFirst from "./Component/MainContent/Project/ProjectPageFirst";
import ProjectPageSecond from "./Component/MainContent/Project/ProjectPageSecond";
import ProjectPageThird from "./Component/MainContent/Project/ProjectPageThird";
import ProjectPageFour from "./Component/MainContent/Project/ProjectPageFour";
import ProjectPageFive from "./Component/MainContent/Project/ProjectPageFive";
import ProjectPageSix from "./Component/MainContent/Project/ProjectPageSix";
import Main from "./Pages/Main/Main";
import Kukhni from "./Component/MainContent/Cataloge/Kukhnya";
import ShafaKupe from "./Component/MainContent/Cataloge/shafaKupe";
import Garderobni from "./Component/MainContent/Cataloge/Garderobni";
import Prykhozhi from "./Component/MainContent/Cataloge/Prykhozhi";
import MebliUvannu from "./Component/MainContent/Cataloge/MebliUvannu";
import Rizne from "./Component/MainContent/Cataloge/Rizne";
function App() {
  return (
    <>   <Router>
      <NavigationMenu />
   <div className={styles.Content}>

        <Switch>
          <Router path="/furniture-key"component={FurnitureKey} exact>
            <FurnitureKey />
          </Router>
          <Router path="/contact" component={Contact} exact>
            <Contact />
          </Router>
          <Router path="/how-to-order" component={HowToOrder} exact>
            <HowToOrder />
          </Router>
          <Router path="/catalog" component={Catalog} exact>
            <Catalog />
          </Router>
          <Router path="/" component={Main} exact>
            <Main />
          </Router>
          {/*  */}
          <Router path="/project/first"component={ProjectPageFirst} exact>
            <ProjectPageFirst />
          </Router>
          <Router path="/project/second" component={ProjectPageSecond} exact>
            <ProjectPageSecond />
          </Router>
          <Router path="/project/third" component={ProjectPageThird} exact>
            <ProjectPageThird />
          </Router>
          <Router path="/project/four" component={ProjectPageFour} exact>
            <ProjectPageFour />
          </Router>
          <Router path="/project/five" component={ProjectPageFive} exact>
            <ProjectPageFive />
          </Router>
          <Router path="/project/six" component={ProjectPageSix} exact>
            <ProjectPageSix />
          </Router>
          {/*  */}
          <Router path="/catalog/kukhnya"component={Kukhni} exact>
            <Kukhni />
          </Router>
          <Router path="/catalog/shafa_kupe" component={ShafaKupe} exact>
            <ShafaKupe />
          </Router>
          <Router path="/catalog/garderobni" component={Garderobni} exact>
            <Garderobni />
          </Router>
          <Router path="/catalog/prykhozhi" component={Prykhozhi} exact>
            <Prykhozhi />
          </Router>
          <Router path="/catalog/mebli_u_vannu" component={MebliUvannu} exact>
            <MebliUvannu />
          </Router>
          <Router path="/catalog/rizne" component={Rizne} exact>
            <Rizne />
          </Router>
        </Switch>
      
      <GetConsultation/>
    </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
