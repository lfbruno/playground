import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuTopLogin from './MenuTopLogin';

const isStoreOpen = false;
export default function Navbar({ dataLogin }) {
    return (
        <Fragment>
            <MenuTopLogin dataLogin={ dataLogin }/>
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 text-nav-items">
                <Link to="/">
                    <img
                        src= "img/babadoo-logo_no-slogon.png"
                        alt="Logomarca da loja Babadoo Manaus"
                        width="90rem"
                        height="90rem"
                        className="navbar-brand"
                    />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to="/loja" className="nav-link">
                            {isStoreOpen ? null : "loja"}
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-3 ml-md-auto">
                    <li className="nav-item mr-2 pt-2 align-items-center">
                        <Link to="/" className="nav-link">
                            <span>
                                <i className="fas fa-heart"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-5 align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <span>
                                <i className="fas fa-heart"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="fixed z-index-top pt-3">
                    <span>
                        <i id="searchIcon" className="fas fa-search"></i>
                    </span>
                </div>
            </NavWrapper>
        </Fragment>
    );
}



// STYLES
const NavWrapper = styled.nav`
    .store-container {
        position: relative;
    }

    .store-badge {
        font-size: .4em;
        position: absolute;
        top: 60%;
        left: 65%;
        transform: translate(-50%, -50%);
    }
    #searchIcon {
        cursor: pointer;
        z-index: 1200;
    }
    #closeBtn {
        position: fixed;
        cursor: pointer;
        font-size: 1.7em;
        top: 5rem;
        right: 5%;
        color: var(--mainWhite);
        z-index: 999;
        filter: drop-shadow(0.001em 0.1em 0.1em var(--mainDark));
    }
    & .fixed {
        position: fixed;
        right: 1.2rem;
        top: 1.9rem;
    }
    & .navbar-nav span i,
    #searchIcon {
        font-size: 2.1rem;
        filter: drop-shadow(0.001em 0.1em 0.1em var(--mainDark));
    }
    background: var(--mainRed);
    .nav-link,
    #searchIcon {
        color: var(--mainWhite) !important;
        text-transform: capitalize;
    }

    & .nav-link:hover,
    & .navbar-nav span i:hover,
    #searchIcon:hover {
        transform: scale(1.1);
        filter: drop-shadow(0.001em 0.1em 0.1em var(--mainYellow));
    }
`;
