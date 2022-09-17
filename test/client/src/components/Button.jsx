import React from "react";
import styles from "./Button.module.css"

class Button extends React.Component {
    render() {
        // console.log(this.props)
        const{children, className, onClick, ...attrs} = this.props

        return (
            <>
                <button className={`${className} ${styles.btn}`}
                        onClick={onClick}
                        {...attrs}>
                    {children}
                </button>
            </>
        )
    }
};

Button.defaultProps = {
children: "Default Button",
    onClick: () => {},
    className: 'styles.btn'
}
export default Button;