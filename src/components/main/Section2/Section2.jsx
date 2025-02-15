import "./Section2.scss"
import Brain from "../../../assets/homepage/png/Brain.png"
import welcome1 from "../../../assets/homepage/svg/welcome1.svg"
import welcome2 from "../../../assets/homepage/svg/welcome2.svg"
import welcome3 from "../../../assets/homepage/svg/welcome3.svg"
import welcome4 from "../../../assets/homepage/svg/welcome4.svg"
import welcome5 from "../../../assets/homepage/svg/welcome5.svg"
function Section2() {
  return (
    <section className="section2">
        <div className="section2-container">
            <img src={Brain} alt="Brain" className="section2-container__img" />
            <div className="section2-box">
                <h2 className="section2-box__title">Apply AI, Deep Learning and Data Sciece to solve</h2>
                <p className="section2-box__text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className="section2-box__btn">Learn More</button>
            </div>
        </div>
        <div className="section2-container2">
            <div className="section2-box">
                <img src={welcome1} alt="welcome1" className="section2-box" />
                <p className="section2-box__text1">Naxly as the Winners in Global Agency Awards</p>
                <p className="section2-box__text2">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className="section2-box">
                <img src={welcome2} alt="welcome2" className="section2-box" />
                <p className="section2-box__text1">Expert Prespective Agency Awards</p>
                <p className="section2-box__text2">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className="section2-box">
                <img src={welcome3} alt="welcome3" className="section2-box" />
                <p className="section2-box__text1">Business Prespective Global Agency Awards</p>
                <p className="section2-box__text2">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className="section2-box">
                <img src={welcome4} alt="welcome4" className="section2-box" />
                <p className="section2-box__text1">Value for Results in Global Agency Awards</p>
                <p className="section2-box__text2">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className="section2-box">
                <img src={welcome5} alt="welcome5" className="section2-box" />
                <p className="section2-box__text1">Global Experience in Agency Awards</p>
                <p className="section2-box__text2">Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
        </div>
    </section>
  )
}

export default Section2