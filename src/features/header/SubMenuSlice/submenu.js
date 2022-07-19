import { categories } from "../variables/variables"
export const SubMenu = () => {

    return (
        <div key="subMenu" className='subMenu'>
            {categories.map((item, index)=>{
                return(
                    <div key={index} className="subMenuItem">
                        <span>{item.name}</span>
                        {item.subCategories ? 
                            <>
                                <span className="rightArrow">&#10148;</span>
                                <div className="subMenuDiv">
                                    {item.subCategories.map((item, index)=>{
                                        return (
                                            <div key={index} className="subSubMenuItem">{item}</div>       
                                        )                            
                                    })}                           
                                </div>
                            </>
                        : null}
                    </div>
                )
            })}
        </div>
    )
}