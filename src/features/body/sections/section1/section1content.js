export const Section1Content = ({persant, link}) => {

    return (
        <>
            <h3 >Save {persant}%</h3>
            <h2 className="SpecialOfferFont">Special Offer</h2>
            <a className="rightPartLink" href={link} >
                <div className="SHOPNOW2">Shop Now</div>
             </a>
        </>
    )
}