import React, { useState } from "react";

const ImageUphold=()=>{
    const [image, setImage] = useState("");
    
    function handleImage(){
        console.log(e.target.files);
        setImage(e.target.files[0])
    }

    function handleApi(){

    }
    return(
        <div>
            <input
                type="file"
                name="file"
                onChange={handleImage} />
            <button onClick={handleApi}>Submit</button>
        </div>
    )

}

export default ImageUphold;
