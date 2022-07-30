import { PagesArr } from "../../variables/variables"

export const Pages = () => {


    return (
        <>
            <span>Pages</span>
            <span>&#11167;</span>
            <div className="PagesDropdown">
                {PagesArr.map((item, index) => {
                    return (
                        <div key={index} className="PagesDropdownItem">{item.name}</div>
                    )
                })}
            </div>
        </>
    )
}