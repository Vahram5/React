import { useSelector, useDispatch } from 'react-redux';
import { SelectFavorite } from "./favoriteSlice";
import more from "./img/menu.png"
import { SelectCart } from "./cartSlice";
import { SubMenu } from './SubMenuSlice/submenu';
import { editOpenStatus, SelectStatus } from './SubMenuSlice/subMenuSlice';
import { editCategoriesOpenStatus, SelectCategoriesOpenStatus } from './categoriesOpenStatus';

export const ThirdPart = () => {
    const dispatch = useDispatch()
    const favorite = useSelector(SelectFavorite)
    const cart = useSelector(SelectCart)
    const openStatus = useSelector(SelectStatus)
    const categoriesOpenStatus = useSelector(SelectCategoriesOpenStatus)

    
    console.log(openStatus, categoriesOpenStatus)
    return (
        <>
            <div className="thirdPart">
                <div className="thirdPartLeftPart">
                    <button 
                        className="categoriesButton" 
                        onClick={() => {
                            dispatch(editCategoriesOpenStatus(categoriesOpenStatus))
                        }}
                    >
                        <div className="categoriesButtonBringCenter">
                            <img className="categoriesMenu" src={more} alt="more" />
                            <span className="leftArrow">Categories</span>
                        </div>
                        <span className="leftArrow">&#x29EA;</span>
                    </button>
                    <div className="ThirdPartMenu">
                        <a href="ds">Home</a>
                        <a href="ds">Shop</a>
                        <a href="ds">Shop Details</a>
                        <button className="PagesButton">
                            Pages 
                            <span className="font20px">&#x29EA;</span>
                        </button>
                        <a href="ds">Contact</a>
                    </div>


                    {categoriesOpenStatus ? 
                        <SubMenu 
                            statuss={openStatus}
                            onClick={()=>{
                                dispatch(editOpenStatus(openStatus))
                            }} 
                        />
                    : null}
                </div>
                <div className="ThirdLineRightPart">
                    <div className="cartFavoriteDiv">
                        <div>
                            <span className="favoriteIcon">&#x2661;</span>
                            <span className="favText">{favorite.length}</span>
                        </div>
                        <div>
                            <span className="favoriteIcon">&#x1F6D2;</span>
                            <span className="favText">{cart.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}