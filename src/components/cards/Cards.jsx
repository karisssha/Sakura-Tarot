import Cards from "../randomCards/RandomCards";
import styles from "./Cards.module.css";

function CardsContainer() {
  return (
    <>
       <Cards className= {styles.gridContainer}/>
    </>
    );
}

export default CardsContainer;
