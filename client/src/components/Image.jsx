import React from "react";

class Image extends React.PureComponent {
  render() {
    let { src, alt, className, width, height, ...attrs } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        {...attrs}
      />
    );
  }
}

Image.defaulProps = {
  src: `https://via.placeholder.com/100*100`,
  alt: "image name",
  className: "",
  width: 100,
  height: 100,
};

export default Image;
