import styles from "./BirdList.module.css"
import BirdCard from "../../components/BirdCard/BirdCard";


const BirdList = (props) => {
  console.log("birdlist props:", props);
  return (
    <main className={styles.container}>
      {props.birds.map(bird => (
        <BirdCard bird={bird} key={bird._id}/>
      ))}
    </main>
  )
}

export default BirdList