import arrow from "../../../asset/smith/arrow.png";
import style from "../arrow/index.module.css";

const GreenArrow = ({})=>{
    return (
        <img src={arrow} alt={"arrow"} className={style.arrow}/>
    )
}

export default GreenArrow