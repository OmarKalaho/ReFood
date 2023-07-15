import styles from "../../styles/Hero.module.css";
import Link from "next/link";

const Body = () => {
  return (
    <p className={styles.h2}>
      Lets stop food waste and save the world! 
      Our goal is to connect
      Food Charities and Food Recycling Factories, with any Organization or Person that
      has leftover food that they want to dispose.<Link href="/startNow"> <span className={styles.a}>Start Now!</span></Link>
    </p>
  );
};
export default Body;
