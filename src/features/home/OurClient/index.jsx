import style from "./index.module.css"
import logo1 from "../../../asset/Ourclients/Logo1.png"
import logo2 from "../../../asset/Ourclients/Logo2.png"
import logo3 from "../../../asset/Ourclients/Logo3.png"
import logo4 from "../../../asset/Ourclients/Logo4.png"
import logo5 from "../../../asset/Ourclients/Logo5.png"
import logo6 from "../../../asset/Ourclients/Logo6.png"
import logo7 from "../../../asset/Ourclients/Logo7.png"
import {Content} from "./data";

const OurClient = () => {
    return (
        <div className={style.mainBoard}>
            <div className={style.client}>
                <p className={style.clients}>Our Clients <span className={style.minitext} style={{display: "block"}}>
                    We have been working with some Fortune 500+ clients</span></p>
            </div>
            <div className={style.clientLogo}>
                <img src={logo1} alt={"Logo1"} className={style.logo}></img>
                <img src={logo2} alt={"logo2"} className={style.logo}></img>
                <img src={logo3} alt={"logo3"} className={style.logo}></img>
                <img src={logo4} alt={"logo4"} className={style.logo}></img>
                <img src={logo5} alt={"logo5"} className={style.logo}></img>
                <img src={logo6} alt={"logo6"} className={style.logo}></img>
                <img src={logo7} alt={"logo7"} className={style.logo}></img>
            </div>
            <div>
                <p className={style.sectionTitle}>Manage your entire community<span className={style.break}
                                                                                    style={{display: "block"}}> in a single system</span><span
                    className={style.description} style={{display: "block"}}>Who is Nextcent suitable for
                </span></p>
            </div>

            <div  className={style.communityImage} style={{
                display: "flex",
                flex_direction: "row",
                justifyContent: "center",
                gap: "80px",
                textAlign: "center"
            }}>
                {
                    Content.map((items, index) => {
                        return (
                                <div className={style.oneItem} style={{color: "#4D4D4D"}}>
                                    <img src={items.image} alt={"icon"}></img>
                                    <h3>{items.title} </h3>
                                    <p style={{textAlign: "center"}}>{items.body}</p>
                                </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default OurClient
