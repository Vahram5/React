import "../../css/header.css"
import { FirstLine } from "../firstLine"
import { SecondLine } from "../secondLine";
import { ThirdPart } from "../thirdLine";



const Header = () => {

    return(
        <>
            <header>
                <FirstLine />
                <SecondLine />
                <ThirdPart />

            </header>
        </>
    )
}

export default Header