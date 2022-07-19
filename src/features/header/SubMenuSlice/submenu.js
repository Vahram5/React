import { categories } from "../../variables/variables"
export const SubMenu = ({statuss, onClick}) => {
    const newArray = categories.map((item, index)=>{
        // console.log(index)
        return(
            <div key={index} className="subMenuItem">
                {item.name}
                {item.subCategories ? 
                    <>
                        <button 
                            className="openSubMenu"
                            onClick={onClick}
                        > &#10148; </button>
                        {statuss ? 
                            <div className="subMenuDiv">
                                {item.subCategories.map((item, index)=>{
                                    return (
                                        <div key={index} className="subSubMenuItem">{item}</div>
                                    )
                                })}
                            </div>
                        : null}
                        
                    </> : null}
            </div>
        )
    })

    return (
        <div key="subMenu" className='subMenu'>
            {newArray}
        </div>
    )
}