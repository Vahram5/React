import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"
import img4 from "../../images/4.png"

export const arr = [
    {
        id: Math.random(),
        text: "It's a dragon",
        imgURL: img1,
        status: false
    },
    {
        id: Math.random(),
        text: "It's a gamepad",
        imgURL: img2,
        status: false
    },
    {
        id: Math.random(),
        text: "It's a download icon",
        imgURL: img3,
        status: false
    },
    {
        id: Math.random(),
        text: "Maybe Wordpress",
        imgURL: img4,
        status: false
    },
]

export const photoReducee = (state={}, action) => {
    if(action.type === "makeVisilable"){
        return (state.map((item)=>{
            if(item.id === action.payload.id){
                return (
                    {
                        id: item.id,   
                        text: item.text,
                        imgURL: item.imgURL,
                        status: !item.status
                    }
                )
            }
            return item
        }))
    }

    return state
}

export const makeVisilableDispatch = (dispatch,item) =>{
    return (
        dispatch({
            type: "makeVisilable",
            payload: item
          })
    )
}
export const selectPhotoArray = (state) => {
    return state.photoArr
}