import { useEffect, useState } from "react";
import styles from "../../styles/counterComp.module.css";
import Digit from "./digit";
import IconButton from "@mui/material/IconButton";
import Diversity1TwoToneIcon from '@mui/icons-material/Diversity1Outlined';
import GrassTwoToneIcon from '@mui/icons-material/GrassRounded';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltOutlined';

const iconArray = [(<Diversity1TwoToneIcon/>),(<GrassTwoToneIcon  />),(<ElectricBoltTwoToneIcon />)];


const Number = ({ index, label, num, unit }) => {
  const [comp, setComp] = useState(false);  

  let arrayNum = num.toString().split("");

  const digits = arrayNum.map((digit, i) => <Digit key={i} num={digit} />);

  useEffect(() => {
    setTimeout(() => {
      setComp(true);
    }, 1000 * (index+1));
  }, []);

  return (
    <>
      <div className={styles.item}>
        <span className={styles.p}>{label}</span>
        {comp ? (
          <span className={styles.num}>{digits}+</span>

        ) : (
          <span className={styles.numhidden}>{1}</span>
        )}
        <div className={styles.num}>
        <span>{unit}</span>
        <IconButton> {iconArray[index]}</IconButton>
      </div>

      </div>
    </>
  );
};

export default Number;
