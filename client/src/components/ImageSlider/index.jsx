import React from "react";
import Icon from "../Icon";
import styles from "./ImageSlider.module.css";
import { ReactComponent as VectorLeft } from "../../assets/SVG/VectorLeft.svg";
import { ReactComponent as VectorRight } from "../../assets/SVG/VectorRight.svg";

class ImageSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    const { slides, className } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className={styles.sliderStyle}>
        {slides.length > 1 ? (
          <Icon
            className={styles.vectorLeftBlock}
            onClick={
              currentIndex > 0
                ? () =>
                  this.setState(() => ({ currentIndex: currentIndex - 1 }))
                : null
            }
          >
            <VectorLeft className={styles.vectorArrow} />
          </Icon>
        ) : null}
        {slides.length > 1 ? (
          <Icon
            className={styles.VectorRightStyle}
            onClick={
              slides.length - 1 > currentIndex
                ? () =>
                  this.setState(() => ({ currentIndex: currentIndex + 1 }))
                : null
            }
          >
            <VectorRight className={styles.vectorArrow} />
          </Icon>
        ) : null}
        <img className={className} src={slides[currentIndex]} alt="" />
      </div>
    );
  }
}

ImageSlider.defaulProps = {
  alt: "image name",
  className: "",
  width: 100,
  height: 100,
};

export default ImageSlider;
