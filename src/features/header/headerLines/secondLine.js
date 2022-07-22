import "../../../css/secondline.css"
import logo from "../img/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { editSearchInput, SelectSearchValue } from "../headerSlice/headerSlice"

export const SecondLine = () => {
    const searchValue = useSelector(SelectSearchValue)
    const dispatch = useDispatch()

    return (
        <>
        <div className="secondPart">
            <div className="logoDiv">
                <img src={logo} alt="logo" />
            </div>
            <form className="searchForm" action="#" >
                <button className="searchButton" >&#128269;</button>
                <input 
                    type="search" 
                    className="searchInput"
                    value={searchValue}
                    onChange={(e)=>{dispatch(editSearchInput(e.target.value))}}
                />
            </form>
            <div className="secondPartThirdDiv">
                <h3>Custom Service</h3>
                <span>+374374374374</span>
            </div>
        </div>
        </>
    )
}