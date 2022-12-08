import React from "react";
import Icon from "./Icon"
import styles from "./ImageSlider.module.css"
import {ReactComponent as VectorLeft} from "../assets/SVG/VectorLeft.svg"
import {ReactComponent as VectorRight} from "../assets/SVG/VectorRight.svg"

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }

    goToPrevious = () => {
        const {slides} = this.props
        const {currentIndex} = this.state
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1;
        this.setState({
            currentIndex: newIndex
        })

    }

    goToNext = () => {
        const {slides} = this.props
        const {currentIndex} = this.state
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        this.setState({
            currentIndex: newIndex
        })
    }

    render() {
        const{slides, className} = this.props
        const {currentIndex} = this.state

        return (
            <div className={styles.sliderStyle}>
                {slides.length > 1 ? (
                    <Icon className={styles.vectorLeftBlock}
                          onClick={this.goToPrevious}>
                        <VectorLeft className={styles.vectorArrow}/>
                    </Icon>) : null}
                {slides.length > 1 ? (
                    <Icon className={styles.VectorRightStyle}
                          onClick={this.goToNext}>
                        <VectorRight className={styles.vectorArrow}/>
                    </Icon>
                ) : null}
                <img className={className} src={slides[currentIndex]} alt=""/>
            </div>
        )
    }
};

ImageSlider.defaulProps = {
    alt:"image name",
    className: '',
    width: 100,
    height: 100
}

export default ImageSlider;