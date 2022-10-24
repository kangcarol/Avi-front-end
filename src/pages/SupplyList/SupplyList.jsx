import styles from './SupplyList.module.css'
import SupplyListCard from '../../components/SupplyCard/SupplyCard'
import { useNavigate } from 'react-router-dom'

const SupplyList = (props) => {
  console.log('SUPPLYLIST', props)
  const navigate = useNavigate()
  return (
    <main className={styles.container}>
      <button onClick={() => {navigate('/supplylists/new')}}>Make A SupplyList</button>
      {props.supplyLists.map((supplylist) => (
        <SupplyListCard key={supplylist._id} supplylist={supplylist} />
      ))}
    </main>
  )
}

export default SupplyList