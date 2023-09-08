import style from "./Header.module.css";
const iconURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==";

const Header = () => {
  return (
    <div>
      <div className={style.topBar}>
        <h5 className={style.h5}>
          Now get exciting rewards on learning. Know More
        </h5>
        <span>X</span>
      </div>
      <div className={style.mainNav}>
        <div className={style.logoDiv}>
          <div className={style.logo}>EDYODA</div>
          <br />
          <p className={style.stories}>stories </p>
        </div>
        <p>
          Explore categories <img alt="icon" src={iconURL} />
        </p>
        <div className={style.buttonDiv}>
          <p className={style.headPara}>
            EdYoda is free learning and knowledge sharing platform for techies
          </p>
          <button className={style.navButton}>Go To Main Website</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
