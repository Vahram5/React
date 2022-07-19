import "../../../css/header.css"
import { FirstLine } from "../headerLines/firstLine";
import { SecondLine } from "../headerLines/secondLine";
import { ThirdPart } from "../headerLines/thirdLine";



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