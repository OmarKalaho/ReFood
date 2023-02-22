import styles from "../../styles/Hero.module.css";

const Body = () => {
  return (
    <p className={styles.h2}>
      Lets stop food waste and save the world! 
      Refood is a Leftover Food Management, our goal is to connect as widly
      and as effortlessly as possibe
      food charities and food recycling factories, with any organization or person that
      has leftover food that they want to dispose. <a className={styles.a}>Start Now!</a>
    </p>
  );
};
export default Body;
