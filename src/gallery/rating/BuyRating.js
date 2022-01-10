import React, { useState } from 'react';
import "./_NPSRating.css";
import StarsBuyExperience, { getGradeText } from "./stars-buy-experience/StarsBuyExperience"
import FacesPromotersScore, { getScaleText } from "./faces-promoters-score/FacesPromotersScore"
import TextField from '@material-ui/core/TextField';
const handleChange = () => null;

const getStyles = () => ({
    fieldFormValue: {
        backgroundColor: 'var(--mainWhite)',
        color: 'var(--themeP)',
        fontSize: '20px',
        fontFamily: 'var(--mainFont)',
    },
});

const handleText = ({ isNPS, grade, scale }) => {
    const gradeText = getGradeText(grade);
    const scaleText = getScaleText(scale);
    if(isNPS) {
        if(!scale) return "Clique na carinha que identifica com sua avaliação"
        return scaleText;
    }

    return gradeText;
}

export default function BuyRating({
    type = "stars",
}) {
    const [scale, setScale] = useState(null);
    const [grade, setGrade] = useState(5);
    const [buyReport, setBuyReport] = useState("");

    const styles = getStyles();

    const handleGrade = (newGrade) => {
        setGrade(newGrade);
    }

    const isNPS = type === "nps";

    const colorP = "default";

    const title = isNPS ? "Em um escala de 1 a 10, quão provável você recomendaria a CHERIE'S BEAUTY para um amigo ou conhecido?" : "Qual foi sua experiência de compra hoje, Febro?"

    return (
        <section
            className="nps-rating--root"
            style={{ backgroundColor: "var(--themeP)" }}
        >
            <h2
                className="question text-shadow"
                style={{
                    fontSize: isNPS ? "1.4rem" : undefined,
                    textAlign: isNPS ? "left" : undefined,
                }}
            >
                {title}
            </h2>
            <section className="my-3 grade-area text-center text-shadow">
                <p className="m-0 grade">
                    {isNPS ? scale ? "Escala" : "" : "Nota"} {scale || !isNPS && grade}
                </p>
                <p className="m-0 text">
                    {handleText({ isNPS, grade, scale })}
                </p>
            </section>
            {isNPS ? (
                <FacesPromotersScore
                    scale={scale}
                    setScale={setScale}
                />
            ) : (
                <StarsBuyExperience
                    grade={grade}
                    handleGrade={handleGrade}
                />
            )}
            <section>
                <h2 className="mt-5 mb-3 text-shadow text-white text-center">
                    Relato de Compra
                </h2>
                <TextField
                    multiline
                    placeholder="Escreva sobre sua última compra... relate o que precisa de melhorias, ou diga o que mais gostou, etc."
                    rows={5}
                    InputProps={{
                        style: styles.fieldFormValue,
                    }}
                    inputProps={{
                        maxLength: 280
                    }}
                    name="buyReport"
                    value={buyReport}
                    onChange={handleChange(setBuyReport)}
                    onBlur={null}
                    variant="outlined"
                    fullWidth
                />
                <div className="position-relative text-white text-left" style={{top: '5px'}}>
                    <span
                        className="font-weight-bold"
                    >
                        {buyReport.length}/280 characteres
                    </span>
                </div>
            </section>
        </section>
    );
}