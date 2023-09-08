import styles from "./Card.module.css";
import cardArray from "./CardArray";
import CardContent from "./CardContent";
const Card = () => {
  return (
    <div className={styles.mainDiv}>
      {cardArray.map((value) => {
        return (
          <span>
            <CardContent
              img={value.img}
              title={value.title}
              author={value.author}
              date={value.date}
              content={value.content}
            />
          </span>
        );
      })}
    </div>
  );
};
export default Card;
