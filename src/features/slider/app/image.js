import  "../image.css"
import { Circle } from "./circle"
export const Image = ({images, value, next, previous, functionSet}) => {

    // console.log(value)

    return (
        <div className="SliderParent">
            <div style={{
                backgroundImage:"url("+images[value]+")"
            }} className="sliderMain">
                <div className="buttons sliderleftPart">
                    <button 
                        className="sliderButton"
                        onClick={()=>{previous()}}
                    >LEFT</button>
                </div>
                {/* <img className="sliderImg" alt="hi" src={images[value]} /> */}
                <div className="buttons sliderrightPart">
                    <button
                        className="sliderButton"
                        onClick={()=>{next()}}
                    >RIGHT</button>
                </div>
            </div>
            <div className="sliderPages">
                <Circle number={value} setValue={functionSet}/>
            </div>
        </div>
    )
}