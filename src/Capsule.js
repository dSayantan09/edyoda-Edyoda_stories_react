import styles from "./Capsule.module.css";
import btnArray from "./ButtonArray";
import Button from "./Button";
import Filter from "./Filter";

const Capsule = () => {
  return (
    <div className={styles.div}>
      <div className={styles.capsual}>
        <Filter />
        <div className={styles.buttonContainer}>
          {btnArray.map((value) => {
            return <Button btn={value.button} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Capsule;