import styles from "../../styles/startNow.module.css";
import Box from "@mui/material/Button";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
const BoxButton = ({ title, children, orient,icon, onClick}) => {
  const theme = useTheme();
  const color = theme.palette.text.primary;
  const overlayOrient = orient == "right" ? styles.overlayR : styles.overlayL;
  return (
    <>
      <Button
        className={styles.button}
        variant="text"
        color="primary"
        sx={{ boxShadow: 1 }}
        onClick ={onClick}
      >
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{children}</p>
        {icon}
        <div className={overlayOrient}></div>
      </Button>
    </>
  );
};
export default BoxButton;
