// eslint-disable-next-line
import React, { Fragment } from 'react';
import LineChart from "../gallery/line-chart/LineChart.js";
import "./_index.css";


export default function Main() {
    const title = "Pontos adicionados por mês"
    const xLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]
    const dataArray = [123, 456, 789, 101112];

    return (
        <section>
            <header className="header theme-p">
            </header>

            <main className="main--root">
                <LineChart
                    xLabels={xLabels}
                    dataArray={dataArray}
                    title={title}
                    onlySmall
                    highestValue={100}
                    lowestValue={-100}
                    axisYTitle="pontos"
                    textAfterData="pts"
                    isFirstPos={false}
                    isLastPos={false}
                />
            </main>

            <footer className="footer theme-p">
            </footer>
        </section>
    );
}

/*
& button {
        position: fixed;
        right: 20px;
        bottom: 20px;
        border: none;
        outline: none;
        background-color: var(--themeS);
        border-radius: 50%;
    }
    & .header, .footer {
        position: relative;
        min-height: 3em;
    }
 */