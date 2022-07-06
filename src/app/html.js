import { makeVisilableDispatch } from '../features/photoArr/photoArrSlice';

const HtmlPhoto = ({photos, dispatch}) => {
    return (
        photos.map((item)=>{
            return (
              <div 
                className='items'
                key={item.id}
                onClick={()=>{makeVisilableDispatch(dispatch,item)}}
              >
                <img src={item.imgURL}  alt={item.text}/>
                {item.status ? <p>{item.text}</p> : null}
              </div>
            )
          })
      )
}

export default HtmlPhoto