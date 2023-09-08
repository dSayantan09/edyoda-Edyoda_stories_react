import styles from "./Capsule.module.css";

function Button(props) {
  return <button className={styles.button}>{props.btn}</button>;
}
export default Button;
