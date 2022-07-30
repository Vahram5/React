import { useEffect } from "react"
// import Slider from "../App"
import {sliderText} from "../../../variables/variables"
import  "../image.css"
import BlackBlureffect from "./blackblureffect"
import { Circle } from "./circle"
export const Image = ({images, value, functionSet}) => {

    useEffect(() => {
        setTimeout(() => { 
            value+1 >= 3 ? functionSet(0) : functionSet(value+1) }, 10000);
      }, [value]);

    return (
        <div className="SliderParent">
            <div className="sliderContent">
                <h2 className="SliderHeading">{sliderText[value].heading}</h2>
                <span className="SliderSpan">{sliderText[value].text}</span>
                <a className="ShopNowATag" href={sliderText[value].link}>
                    <div className="SHOPNOW">Shop Now</div>
                </a>
            </div>
            <div className="sliderMain"> 
                <img 
                    className="SliderMainImg" 
                    style={{
                        backgroundImage:"url("+images[value]+")"
                    }} 
                    alt="slider"
                />
            </div>
            <div className="sliderPages">
                <Circle number={value} setValue={functionSet}/>
            </div>
            <BlackBlureffect />
        </div>
    )
}