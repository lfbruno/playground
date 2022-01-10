import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MuSlider from "../sliders/MuSlider.js";
import "./_FacesPromotersScore.css";
// NPS (Net Promoter Score) Rating

const facePatterns = ["angry", "angry", "frown", "frown", "meh", "meh", "grimace", "grimace", "grin-wink", "grin-wink"];

export const getScaleText = (s) => {
    if(s === 1 || s === 2) return "raro";
    if(s === 3 || s === 4) return "pouco provável";
    if(s === 5 || s === 6) return "talvez";
    if(s === 7 || s === 8) return "provável";
    if(s === 9 || s === 10) return "muito provável";
}

export default function FacesPromotersScore({
    scale,
    setScale,
}) {
    return (
        <section className="d-flex">
            <div className={`faces-group shadow-elevation-black`}>
                {facePatterns.map((f, ind) => (
                    <FontAwesomeIcon
                        key={ind}
                        icon={f}
                        className={`scale-${ind + 1} ${scale === ind + 1 ? "curr-scale" : ""}`}
                        onClick={() => setScale(ind + 1)}
                    />
                ))}
            </div>
        </section>
    );
}