import styles from "./BirdList.module.css"
import BirdCard from "../../components/BirdCard/BirdCard";
import { useNavigate } from "react-router-dom";

const BirdList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.birdList}>Bird List</h1>
      <>
        <main className={styles.birdList}>
        <button className="btn btn-secondary"  onClick={() => {navigate("/birds/new")}}>Add a Bird</button>

        {props.birds.map(bird => (
          <BirdCard handleSeen={props.handleSeen} handleAddWishlist={props.handleAddWishlist} bird={bird} key={bird._id}/>
        ))}
        </main>
      </>
    </>
  )
}

export default BirdList