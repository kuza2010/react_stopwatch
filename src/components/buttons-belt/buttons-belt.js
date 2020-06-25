import React from "react";

const ButtonsBelt = ({alignment = "center", children}) => {

    return (
        <div className={`row ${alignment}`}>
            {children}
        </div>
    )
}

export default ButtonsBelt;