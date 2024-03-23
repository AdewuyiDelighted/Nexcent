import arrow from "../../../asset/footer/arrow.svg"
import style from "./index.module.css"

const Arrows = ({color})=>{
    return (
        <img src={arrow} alt={"arrow"} className={style.arrow} style={{fill:color}}/>
    )
}

export default Arrows
