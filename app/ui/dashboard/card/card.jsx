import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Title</span>
        <span className={styles.number}>12 345</span>
        <span className={styles.detail}>
          <span className={styles.positive}>
            {24}%
          </span>{" "}
           than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;