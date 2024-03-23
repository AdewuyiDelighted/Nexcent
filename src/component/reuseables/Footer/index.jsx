import style from "./index.module.css"
import Arrow from "../../reuseables/arrow"
import logo from "../../../asset/footer/Logo.png"
import insta from "../../../asset/footer/insta.png"
import dont from "../../../asset/footer/idontknow.png"
import twitter from "../../../asset/footer/twitter.png"
import youtube from "../../../asset/footer/youtube.png"
import fly from "../../../asset/footer/Vector.png"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.buttons}>
                <button style={{backgroundColor: "#4CAF4F", color: "#FFFFFF"}} className={style.button}>Get a
                    Demo <Arrow color={"#4CAF4F"}/></button>
            </div>
            <div className={style.miniBox}>
                <div>
                    <img src={logo} alt={"logo"}/>
                    <p className={style.text}>Copyright © 2020 Nexcent ltd.<span style={{display: "block"}}>All rights reserved</span>
                    </p>
                    <div className={style.social}>
                        <img src={insta} alt={"insta"} className={style.oneSocial}/>
                        <img src={dont} alt={"dontknow"} className={style.oneSocial}/>
                        <img src={twitter} alt={"twitter"} className={style.oneSocial}/>
                        <img src={youtube} alt={"youtube"} className={style.oneSocial}/>
                    </div>
                </div>
                <div className={style.company}>
                    <div>
                        <p className={style.heading}>Company</p>
                        <div className={style.list}>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>
                    <div>
                        <p className={style.heading}>Support</p>
                        <div className={style.list}>
                            <p>Help Center</p>
                            <p>Term of Service</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Status</p>
                        </div>
                    </div>
                    <div>
                        <p className={style.heading}>Stay up to date</p>
                        <input type={"text"} placeholder={"Your email address"} className={style.email}></input>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Footer