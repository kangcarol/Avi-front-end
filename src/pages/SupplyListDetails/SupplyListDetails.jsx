import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './SupplyListDetails.module.css'

import * as supplyListService from '../../services/supplyListService'

import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const SupplyListDetails = (props) => {
  const { id } = useParams()
  const [supplylist, setsupplylist] = useState(null)

  useEffect(() => {
    const fetchSupplylist = async () => {
      const data = await supplyListService.show(id)
      setsupplylist(data)
    }
    fetchSupplylist()
  }, [id])

  if (!supplylist) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{supplylist.toUpperCase()}</h3>
          <h1>{supplylist.title}</h1>
          <span>
            <AuthorInfo content={supplylist} />
          </span>
        </header>
        <p>{supplylist.description}</p>
        <p>{supplylist.items}</p>
      </article>
      <section></section>
    </main>
  )
}

export default SupplyListDetails