import "./Section3.scss"
import smart from "../../../assets/homepage/png/smart.png"

function Section3() {
  return (
    <section className="section3">
        <div className="section3-container">
            <div className="section3-textbox">
                <h2 className="section3-textbox__title">What our clients say about our awesome solutions</h2>
                <p className="section3-textbox__text">To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                <p className="section3-textbox__text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                <p className="section3-textbox__text">Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                <p className="section3-textbox__text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <img src={smart} alt="smart" className="section3-img" />
        </div>
    </section>
  )
}

export default Section3