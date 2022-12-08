import React from "react";

class Icon extends React.PureComponent {
    render() {
        const {children, className, onClick, size, ...attrs} = this.props
        const elemSize = size ? {fontSize: `${size}px`} : null;

        return (
            <div
                className={className}
                onClick={onClick}
                style={elemSize}
                {...attrs}>
                {children}
            </div>
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