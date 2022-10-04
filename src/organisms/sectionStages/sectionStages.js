import React from 'react';
import Slider from "../../molecules/Slider/Slider";
import {sliderArray} from "../../constants";
import Slide from "../../atoms/slide/slide";

const SectionStages = () => {
    return (
        <div className="SectionStages">
            <h2 className="SectionStages__title">Этапы создания веб-сайта под ключ</h2>
            <Slider arrayItems={sliderArray.map(slide=><Slide slide={slide}/>)}/>
        </div>
    );
};

export default SectionStages;