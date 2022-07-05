// import { useState } from "react"
import "./main.css"
export const Main = ({props, MakeItTrue}) =>{

    const array = props.map((element)=>{
        return (
            <div key={element.id} className="mainDiv">
                <div className="questionDiv">
                    <span className="Question">{element.question}</span>
                    <button 
                        
                        onClick={()=>{
                            MakeItTrue(element)}}
                    >↓</button>
                </div>
                {/* {element.opened ? <p style={{transition: "0.5s", opacity: "1", display: "block"}}>{element.answer}</p> : <p style={{transition: "0.5s", opacity: "0", display: "none"}}></p>} */}
                {element.opened ? <p className="Answer">{element.answer}</p> : null}
                
            </div>
        )
    })
    return (
        <div>
            {array}
        </div>
    )
}