import React from "react";

class Title extends React.Component {
    render() {
        const{children, className} = this.props

        return (
            <>
                <p className={className}>{children}</p>
            </>
        )
    }
};

export default Title;