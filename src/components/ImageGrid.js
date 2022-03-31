import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
    const { docs } = useFirestore("images");
    console.log(docs);
    return (
        <div className="rows">
            <div className="columns">
                {docs.map((doc,i) => {
                    return(
                        <div className="img-container">
                            <div className="overlay"></div>
                            <img src={doc.url} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageGrid;