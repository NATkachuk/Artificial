import "./Section1.scss"
import Rocket from "../../../assets/homepage/png/Rocket.png";
import play from "../../../assets/homepage/svg/play.svg";
import tech from "../../../assets/homepage/svg/tech.svg";
import flow from "../../../assets/homepage/svg/flow.svg";
import moon from "../../../assets/homepage/svg/moon.svg";
import triangle from "../../../assets/homepage/svg/triangle.svg";
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <div className="section1-box">
                <div className="section1-box__cont">
                    <div className="section1-box__cont-textbox">
                        <p className="section1-box__cont-textbox-text">Next genaretion platform</p>
                        <h1 className="section1-box__cont-textbox-title">Artificial intelligence & Syber security</h1>
                    </div>
                    <p className="section1-box__cont-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="section1-box__cont-btns">
                        <button className="section1-box__cont-btns-btn1">Get Started</button>
                        <button className="section1-box__cont-btns-btn2"><img src={play} alt="play" className="section1-box__cont-btns-btn2-img" />Watch Video</button>
                    </div>
                </div>
            </div>
            <img src={Rocket} alt="Rocket" className="section1-container__img" />
        </div>
        <div className="section1-container2">
            <img src={tech} alt="tech" className="section1-container2__img" />
            <img src={flow} alt="flow" className="section1-container2__img" />
            <img src={moon} alt="moon" className="section1-container2__img" />
            <img src={triangle} alt="triangle" className="section1-container2__img" />
        </div>
    </section>
  )
}

export default Section1