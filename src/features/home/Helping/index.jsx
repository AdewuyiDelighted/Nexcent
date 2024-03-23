import style from "./index.module.css"
import frame from "../../../asset/helping/frame.png"
import iconOne from "../../../asset/helping/Icon.svg"
import iconTwo from "../../../asset/helping/Icon2.png"
import iconThree from "../../../asset/helping/Icon3.png"
import iconFour from "../../../asset/helping/Icon4.png"
import FilledButton from "../../../component/reuseables/filledButtons";

const Helping = () => {
    return (
        <div>
            <div className={style.mainBoard}>
                <div>
                    <p className={style.sectionTitle}>Helping a local<span className={style.sectionTitleTwo}
                                                                           style={{display: "block"}}> business reinvent itself</span>
                        <span className={style.description} style={{display: "block"}}>We reached here with our hard work and dedication</span>
                    </p>
                </div>

                <div className={style.wholeIcon}>
                    <div>
                        <div className={style.member}>
                            <img src={iconOne} alt={"icon"} className={style.image} style={{height: "6vh"}}/>
                            <div className={style.memberText}>
                                <p className={style.memberNum}>2,245,341 <span style={{display: "block"}}
                                                                               className={style.smallMember}>Member</span></p>
                            </div>
                        </div>

                        <div className={style.member}>
                            <img src={iconTwo} alt={"icon"} className={style.image} style={{height: "6vh"}}/>
                            <div className={style.memberText}>
                                <p className={style.memberNum}>46,328<span style={{display: "block"}}
                                                                           className={style.smallMember}>Clubs</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={style.member}>
                            <img src={iconThree} alt={"icon"} className={style.image} style={{height: "6vh"}}/>
                            <div className={style.memberText}>
                                <p className={style.memberNum}>828,867<span style={{display: "block"}}
                                                                            className={style.smallMember}>Event Bookings</span>
                                </p>
                            </div>
                        </div>

                        <div className={style.member}>
                            <img src={iconFour} alt={"icon"} className={style.image} style={{height: "6vh"}}/>
                            <div className={style.memberText}>
                                <p className={style.memberNum}>1,926,436<span style={{display: "block"}}
                                                                              className={style.smallMember}>Payments</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className={style.mainBoardTwo}>
                <img src={frame} alt={"frame"}/>
                <div>
                    <h2>How to design your site footer like <br/>we did</h2>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br/>
                        molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at<br/>
                        libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                        porta<br/>
                        nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                        Integer<br/>
                        in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et
                        nisi<br/> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <FilledButton color={"#4CAF4F"} text={"Learn More"} textColor={"#FFFFFF"}/>
                </div>
            </div>
        </div>

    )

}

export default Helping