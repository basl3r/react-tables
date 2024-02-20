import TableCard from "../../views/TableCard/TableCard";
import styles from "./Home.module.scss"

const Home = () => {
  return(
    <div className = {styles.home}>
      <h1>All tables</h1>
      <TableCard />
    </div>
  )
}

export default Home;