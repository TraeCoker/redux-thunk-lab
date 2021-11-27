import React from "react";

const CatList = props => {
    
    return(
        <div>
            { props.catPics.map(image => <img key={image.id} src={image.url} alt="Cute kitty"/>)}
        </div>
    )
}

export default CatList