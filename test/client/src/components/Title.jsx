import React from "react";
import styles from "./Title.module.css"

class Title extends React.Component {
    render() {
        // console.log(this.props)
        const{children, className} = this.props
        // const {name, brand} = this.props
        // console.log(cartItem.name)

        return (
            <>
                <p className={className}>{children}</p>
            </>
        )
    }
};

export default Title;