import "../image.css"
export const Circle = ({number, setValue}) => {
    var arr = [ <button key={0} onClick={()=>{setValue(0)}} className="circle" id="i1"></button>,
                <button key={1} onClick={()=>{setValue(1)}} className="circle" id="i2"></button>,
                <button key={2} onClick={()=>{setValue(2)}} className="circle" id="i3"></button>]
    return(
        <>
           {arr.map((item) => {
                if(number === parseInt(item.key) && number === 0){
                    return (<button key={0} onClick={()=>{setValue(0); console.log(0)}} className="black circle" id="i1"></button>)
                } else if(number === parseInt(item.key) && number === 1){
                    return (<button key={1} onClick={()=>{setValue(1)}} className="black circle" id="i2"></button>)
                }else if(number === parseInt(item.key) && number === 2){
                    return (<button key={2} onClick={()=>{setValue(2)}} className="black circle" id="i3"></button>)
                }
                return item;
            })}
        </>
    )
}