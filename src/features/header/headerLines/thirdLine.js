import { useSelector } from 'react-redux';
import { SelectFavorite } from "../favoriteSlice";
import more from "../img/menu.png"
import { SelectCart } from "../cartSlice";
import { SubMenu } from '../SubMenuSlice/submenu';
import { Pages } from '../PagesSub';

export const ThirdPart = () => {
    const favorite = useSelector(SelectFavorite)
    const cart = useSelector(SelectCart)
    
    return (
        <>
            <div className="thirdPart">
                <div className="thirdPartLeftPart">
                    <button className="categoriesButton">
                        <div className="categoriesButtonBringCenter">
                            <img className="categoriesMenu" src={more} alt="more" />
                            <span className="leftArrow">Categories</span>
                            <SubMenu />
                        </div>
                        <span className="leftArrow">&#11167;</span>
                    </button>
                    <div className="ThirdPartMenu">
                        <a href="ds">Home</a>
                        <a href="ds">Shop</a>
                        <a href="ds">Shop Details</a>
                        <div className="PagesButton">
                            {/* Pages 
                            <span className="font20px">&#11167;</span> */}
                            <Pages />
                        </div>
                        <a href="ds">Contact</a>
                    </div>


                    
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