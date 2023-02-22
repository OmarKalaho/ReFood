
import styles from "../../styles/Hero.module.css";
const Title = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}> ReFood</h1>
        <p className={styles.secodaryTitle}>A Food Waste Managemnt System</p>
      </div>
    </>
  );
};
export default Title;
