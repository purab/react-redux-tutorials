import React from "react";

const RainBow = (WrappedComponent) => {
    const colors=['red','pink','orange','blue','green','yellow'];
    const randomColors = colors[Math.floor(Math.random() *5)];
    const className = randomColors + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default RainBow;