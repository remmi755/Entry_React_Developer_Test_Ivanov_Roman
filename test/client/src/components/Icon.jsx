import React from "react";

class Icon extends React.Component {
    render() {
        const {children, className, onClick, size, ...attrs} = this.props

        const elemSize = size ? {fontSize: `${size}px`} : null;

        return (
            <i
                className={className}
                onClick={onClick}
                style={elemSize}
                {...attrs}>
                {children}
            </i>
        )
    }
};

Icon.defaultProps = {
    className: '',
    onClick: () => {},
    size: null,
    children: ''
}

export default Icon;