import React from "react";
import '../../assets/css/Login.css';
import Wave from '../../assets/images/wave2.png';
import Deliveries from '../../assets/images/undraw_deliveries_131a.svg';
import AppHeader from "../../components/header";



function RegisterP2() {
    return (
        <div className="body">
            <AppHeader/>
            <img className="wave" src={Wave} alt="wave.png"/>
            <div className="container">
                <div className="img">
                    <img src={Deliveries} alt="logistic.svg"/>
                </div>
                <div className="login-content">
                    <form className="form">
                        <h2 className="title">Registra tu empresa</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-building"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Nombre de la empresa"/>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-location-arrow"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Dirección"/>
                            </div>
                        </div>
                        <a href="/" className="a">¿Ya tienes una cuenta?</a>
                        <a href="/register3" className="btnR">Continuar</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterP2;
