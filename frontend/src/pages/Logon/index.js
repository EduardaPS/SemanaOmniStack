import React from 'react';

import './style.css';

import logoImg from '../../assets/logo.svg' ;
import herosImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <from>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button type="submit">Entrar</button>
                </from>
            </section>
            <img src={herosImg} alt="Heroes"/>
        </div>
    )
}