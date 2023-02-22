import Box from "@mui/material/Box";
import Number from "../counterComp/number";
import styles from "../../styles/counterComp.module.css";

const numbers = [
  { value: 540, unit: "Families", label: "Families Helped" },
  { value: 20000, unit: "Litres", label: "Organic Fertilizer Produced" },
  // { value: 32000,  unit: "Meters Cubed", label: "Displaced Co2" },
  { value: 15, unit: "MW/h", label: " Electricity Generated" },
  //  { WastedFoodSaved: 500000},
  //   {DisplacedC02: 220000},
];

const Counter = () => {
  const theNums = numbers.map((num, i) => {
    return (
      <Number
        index={i}
        key={i}
        label={num.label}
        num={num.value}
        unit={num.unit}
      />
    );
  });

  return <div className={styles.container}>{theNums}</div>;
};
export default Counter;
