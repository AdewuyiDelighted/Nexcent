import style from "./index.module.css"
import FilledButton from "../../../component/reuseables/filledButtons";
import heroImage from "../../../asset/hero/Illustration.svg"
import dotOne from "../../../asset/hero/dotOne.png"
import dotTwo from "../../../asset/hero/dotTwo.png"
import dotThree from "../../../asset/hero/dotThree.png"

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
            <div className={style.threeDot}>
                <img src={dotOne}/>
                <img src={dotTwo}/>
                <img src={dotThree}/>
            </div>
        </div>


    )
}

export default Hero
