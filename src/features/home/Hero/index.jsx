import style from "./index.module.css"
import FilledButton from "../../../component/reuseables/filledButtons";
import heroImage from "../../../asset/hero/Illustration.svg"

const Hero = () => {
    return (
        <div className={style.mainBoard}>
            <div className={style.miniBox}>
                <div className={style.allText}>
                    <p className={style.textOne}>Lesson and insights <span style={{display: "block"}}
                                                                           className={style.textTwo}>from 8 years</span>
                    </p>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <FilledButton color={"#4CAF4F"} text={"Register"} textColor={"#F5F7FA"}/>
                </div>
                <img src={heroImage} alt={"heroImage"}/>
            </div>
        </div>
    )
}

export default Hero
