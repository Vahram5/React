export const FirstLine = () => {
    return (
        <div className="firstPart">
            <div className="firstLeftPart">
                <span>About</span>
                <span>Contact</span>
                <span>Help</span>
                <span>FAQs</span>
            </div>

            <div className="firstRightPart">
                <a href="./ds">Sign In</a>
                <a href="./dsd">Sign Up</a>
                <select>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AMD">AMD</option>
                </select>
                <select>
                    <option value="US">US</option>
                    <option value="RUS">RUS</option>
                    <option value="AM">AM</option>
                </select>
            </div>
        </div>
    )
}