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
                        <img src={doc.url} />
                    )
                })}
            </div>
        </div>
    )
}

export default ImageGrid;