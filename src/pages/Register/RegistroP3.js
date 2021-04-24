import React from "react";
import '../../assets/css/Login.css';
import Wave from '../../assets/images/wave2.png';
import Deliveries from '../../assets/images/undraw_deliveries_131a.svg';
import AppHeader from "../../components/header";



function RegisterP3() {
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
                        <h2 className="title">Registra tu usuario </h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder="Nombre de Usuario"/>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder="Contraseña"/>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <input type="email" className="input" placeholder="Correo electrónico"/>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="div">
                                <input type="telephone" className="input" placeholder="Teléfono"/>
                            </div>
                        </div>
                        <a href="/" className="a">¿Ya tienes una cuenta?</a>
                        <a href="/register3" className="btnR">Finalizar</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterP3;
