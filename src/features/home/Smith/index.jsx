import style from "./index.module.css"
import frame from "../../../asset/smith/image 9 (1).png"
import iconOne from "../../../asset/smith/Logo1.png"
import iconTwo from "../../../asset/smith/Logo2.png"
import iconThree from "../../../asset/smith/Logo3.png"
import iconFour from "../../../asset/smith/Logo4.png"
import iconFive from "../../../asset/smith/Logo5.png"
import iconSix from "../../../asset/smith/Logo6.png"
import GreenArrow from "../../../component/reuseables/greenArrow";
import image1 from "../../../asset/smith/image 1.png"
import image2 from "../../../asset/smith/image 2.png"
import image3 from "../../../asset/smith/image3.png"


const Smith = () => {
    return (
        <div className={style.main}>
            <div className={style.mainBoard}>
                <div className={style.miniBoard}>
                    <img src={frame} alt={"Frame"}/>
                </div>
                <div>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                        risus<br/>
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                        gravida<br/>
                        e nim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,<br/>
                        nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
                        sodales.
                        Suspendisse<br/>
                        eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien,<br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur
                        libero
                        condimentum <br/>
                        id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <p style={{color: "#4CAF4F", fontWeight: "400"}}>Tim Smith</p>
                    <p>British Dragon Boat Racing Association</p>
                    <div className={style.images}>
                        <img src={iconOne} alt={"iconOne"} className={style.image}/>
                        <img src={iconTwo} alt={"iconTwo"} className={style.image}/>
                        <img src={iconThree} alt={"iconThree"} className={style.image}/>
                        <img src={iconFour} alt={"iconFour"} className={style.image}/>
                        <img src={iconFive} alt={"iconFive"} className={style.image}/>
                        <img src={iconSix} alt={"iconSix"} className={style.image}/>
                        <p style={{color: "#4CAF4F"}}>Meet all customers <GreenArrow/></p>
                    </div>
                </div>
            </div>

            <div className={style.sectionTitle}>
                <h3>Caring is the new marketing</h3>
                <p>The Nexcent blog is the best place to read about the latest membership insights,<br/> trends and
                    more. See who's joining the community, read about how our community <br/>are increasing their
                    membership income and lot's more.</p>
                <div className={style.lowerImages}>

                    <div className={style.imageTextContainer}>
                        <img src={image1} alt={"image1"} className={style.lowerImage}/>
                        <div className={style.imageText}>
                            <p>Creating Streamlined <br/> Safeguarding Processes with <br/> OneRen</p>
                            <p style={{color:"#4CAF4F"}}>Readmore <GreenArrow/></p>
                        </div>
                    </div>

                    <div className={style.imageTextContainer}>
                        <img src={image2} alt={"image2"} className={style.lowerImage}/>
                        <div className={style.imageText}>
                            <p>Revamping the Membership<br/> Model with Triathlon <br/>Australia</p>
                            <p style={{color:"#4CAF4F"}}>Readmore <GreenArrow/></p>
                        </div>
                    </div>

                    <div className={style.imageTextContainer}>
                        <img src={image3} alt={"image3"} className={style.lowerImage}/>
                        <div className={style.imageText}>
                            <p>Creating Streamlined <br/> Safeguarding Processes with <br/> OneRen</p>
                            <p style={{color:"#4CAF4F"}}>Readmore <GreenArrow/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Smith