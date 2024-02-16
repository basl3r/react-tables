import TableCard from "../TableCard/TableCard";
import styles from "./Content.module.scss"

const Content = () => {
  return(
    <div className = {styles.content}>
      <h1>All tables</h1>
      <TableCard />
    </div>
  )
}

export default Content;