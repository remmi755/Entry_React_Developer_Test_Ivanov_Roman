import React from "react";

class Button extends React.Component {
    render() {
        console.log(this.props)
        const{children, className} = this.props

        return (
            <>
                <button className={className}>{children}</button>
            </>
        )
    }
};

export default Button;