import styles from "./Card.module.css";

function CardContent(props) {
  return (
    <div className={styles.cardDiv}>
      <img className={styles.img} alt="IT Profession" src={props.img} />
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>{props.title}</h2>
        <h3 className={styles.h3}>
          <span className={styles.author}>{props.author}</span>
          {props.date}
        </h3>
        <p className={styles.p}>{props.content}</p>
      </div>
    </div>
  );
}
export default CardContent;
