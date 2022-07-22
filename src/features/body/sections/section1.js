import Slider from "../../slider/App"
import "../css/section1.css"

export const Section1 = () => {



    return(
        <section className="section1">
            <div className="leftPart">
                <Slider />
            </div>
            <div className="rightPart">
                <div className="rightPartUp rightPartChildren"></div>
                <div className="rightPartBottom rightPartChildren"></div>
            </div>
        </section>
    )
}