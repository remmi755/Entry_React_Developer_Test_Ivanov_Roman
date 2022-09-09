import React from "react";

class Label extends React.Component {
    render() {
        // console.log(this.props)
        const{children, className} = this.props
        // const {name, brand} = this.props
        // console.log(cartItem.name)

        return (
            <>
                <p className={className}>{children}</p>
                {/*<p className={styles.label}>{brand}</p>*/}
            </>
        )
    }
};

export default Label;