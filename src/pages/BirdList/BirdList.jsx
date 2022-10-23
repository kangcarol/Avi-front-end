import styles from "./BirdList.module.css"
import BirdCard from "../../components/BirdCard/BirdCard";


const BirdList = (props) => {
  console.log("birdlist props:", props);
  return (
    <main className={styles.container}>
      {/* <h2><Link to="/birds/new">Add a Bird</Link></h2> */}
      {props.birds.map(bird => (
        <BirdCard bird={bird} key={bird._id}/>
      ))}
    </main>
  )
}

export default BirdList