import Slider from "../../../slider/App"
import BlackBlureffect from "../../../slider/app/blackblureffect"
import "./section1.css"
import rightUp from "./images/offer-1.jpg"
import rightBottom from "./images/offer-2.jpg"
import { Section1Content } from "./section1content"

export const Section1 = () => {



    return(
        <section className="section1">
            <div className="leftPart">
                <Slider />
            </div>
            <div className="rightPart">
                <div className="rightPartUp rightPartChildren">
                    <img className="rightPartUpImg" src={rightUp} />
                    <div className="rightPartUpContent">
                        <Section1Content persant="20" link="#" />
                    </div>
                    <BlackBlureffect />
                </div>
                <div className="rightPartBottom rightPartChildren">
                    <img className="rightPartBottomImg" src={rightBottom} />
                    <div className="rightPartUpContent">
                        <Section1Content persant="40" link="#" />
                    </div>
                    <BlackBlureffect />
                </div>
            </div>
        </section>
    )
}