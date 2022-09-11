import React from "react";

class Button extends React.Component {
    render() {
        console.log(this.props)
        const{children, className, onClick} = this.props

        return (
            <>
                <button className={className} onClick={onClick}>{children}</button>
            </>
        )
    }
};

export default Button;