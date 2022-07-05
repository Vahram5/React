export const Increase = (value, setValue) =>{
    if(value+1 > 2){
        setValue(0)
      }else{
        var number = value+1
        setValue(number)
      }
}
export const Decreased = (value, setValue) =>{
    if(value-1 === -1){
        setValue(2)
      }else{
        var number = value-1
        setValue(number)
      }
}