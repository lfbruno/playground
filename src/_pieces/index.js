// eslint-disable-next-line
import React, { Fragment } from 'react';
import "./_index.css";

export default function Main() {
    return (
        <section>
            <header className="header theme-p">
            </header>

            <main className="main--root"></main>

            <footer className="footer theme-p">
            </footer>
            <button>
                +
            </button>
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