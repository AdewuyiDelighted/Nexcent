import style from "./index.module.css"
import image from "../../../asset/unseen/Frame 35.png"
import FilledButton from "../../../component/reuseables/filledButtons";


const Unseen = () => {
    return (
        <div className={style.mainBoard}>
            <div className={style.image}>
                <img  className={style.image} src={image} alt={"Image"}/>
            </div>
            <div className={style.text}>
                <h4>The unseen of spending three <br/>years at Pixelgrade</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/>accumsan
                    quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br/>porta. Nullam
                    mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam<br/> quis massa
                    pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <FilledButton color={"#4CAF4F"} textColor={"#FFFFFF"} text={"Learn More"}/>
            </div>
        </div>
    )

}
export default Unseen