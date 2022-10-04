import React from 'react';
import "./slide.css"
import slidePreview from "./imgs/Rectangle 147.png"

const Slide = (props) => {
    return (
        <div className="slide">
            <img className="slide__preview" src={slidePreview} alt=""/>
            <div className="slide-content">
                <div className="slide-content-header">
                    <p className="slide-content-header__stage">Этап {props.slide.id}</p>
                    <h3 className="slide-content-header__title">{props.slide.header}</h3>
                </div>
                <div className="slide-content-description">
                    <p className="slide-content-description__upperText">{props.slide.upperText}</p>
                    <p className="slide-content-description__lowerText">{props.slide.lowerText}</p>
                </div>
            </div>
        </div>
    );
};

export default Slide;