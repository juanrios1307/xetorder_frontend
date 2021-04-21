import React from "react";
import '../../assets/css/Login.css';
import Wave from '../../assets/images/wave2.png';
import DashImg from '../../assets/images/undraw_Dashboard_re_3b76.svg';
import Deliveries from '../../assets/images/undraw_deliveries_131a.svg';



function AppRegister() {
    return (

        <div className="body">
            <img className="wave" src={Wave} alt="wave.png"/>
            <div className="container">
                <div className="img">
                    <img src={Deliveries} alt="logistic.svg"/>
                </div>
                <div className="login-content">
                    <form className="form">
                        <img src={DashImg} alt="logo.svg"/>
                        <h2 className="title">Registrate</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nombre de Usuario</h5>
                                <input type="text" className="input"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Contraseña</h5>
                                <input type="password" className="input"/>
                            </div>
                        </div>
                        <a href="/" className="a">¿Olvidaste tu contraseña?</a>
                        <a href="/" className="a">¿Ya tienes una cuenta?</a>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AppRegister;