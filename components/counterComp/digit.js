import styles from "../../styles/counterComp.module.css";
import { use, useEffect, useRef, useState } from "react";
import { red } from "@mui/material/colors";

const Digit = ({ num ,key}) => {
  const [counter, setCounter] = useState(0);
  const [counter2,setCounter2] = useState(0);
  console.log(key)
  if (counter < num +25) {
    setTimeout(() => setCounter(counter + 1), (300*(1/(num+1))))
  }

  return (
    <>
      {counter < num +25 ? (
        <span className={styles.num}>{counter % 10}</span>
      ) : (
        <span className={styles.num}>{num}</span>
      )}
    </>
  );
};

export default Digit;
