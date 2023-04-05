import styles from "../../styles/counterComp.module.css";
import { useEffect, useRef, useState } from "react";

const Digit = ({ num }) => {
  const [counter,setCounter] = useState(0);
  const ref = useRef(null);

  
  useEffect(() =>{
    const interval = setInterval(()=>{
      setCounter(((counter+1)%(Math.floor(Math.random()*(9-1)+1))));
      ref.current+=0.1;
    },180)
    if(ref.current >10000){
      setCounter(num);
      clearInterval(interval);
    }
  },[ref.current])
  return <span className={styles.num}>{counter}</span>;  
};

export default Digit;
