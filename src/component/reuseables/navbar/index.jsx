import style from "./index.module.css"
import logo from "../../../asset/navbar/Logo.svg"
import FilledButton from "../filledButtons";

const Navbar = () => {
    return (
        <div className={style.header}>
            <img src={logo} alt="logo"/>
                <div className={style.list}>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Feature</p>
                    <p>Product</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className={style.button}>
                    <FilledButton color={"#F5F7FA"} text={"Login"} textColor={"#4CAF4F"}/>
                    <FilledButton color={"#4CAF4F"} text={"Sign in"} textColor={"#F5F7FA"}/>
                </div>
            </div>
    )

}
export default Navbar
