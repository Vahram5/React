import  "../css/image.css"
import { Circle } from "./circle"
export const Image = ({images, value, next, previous, functionSet}) => {

    // console.log(value)

    return (
        <div className="SliderParent">
            <div className="sliderMain">
                <div className="buttons leftPart">
                    <button 
                        onClick={()=>{previous()}}
                    >LEFT</button>
                </div>
                <img alt="hi" src={images[value]} />
                <div className="buttons rightPart">
                    <button
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