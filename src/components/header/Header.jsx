import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <header className="hero-background">
            <h1 className="hero-title hero-item">Urmatorul pas al carierei tale incepe cu noi</h1>
            <h2 className="hero-description hero-item">Nu stii ce specializare ti se potriveste cel mai bine? <strong>Advance</strong> iti vine in ajutor cu o multime de <strong>cursuri</strong> dintre care unul sigur e pentru tine</h2>
            <Link to="cursuri"><button className="hero-button hero-item">GASESTE CURSUL PERFECT</button></Link>
        </header>
    )
}

export default Header;