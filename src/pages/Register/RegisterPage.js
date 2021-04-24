import React from "react";
import '../../assets/css/App.css';
import HeaderLogin from "../../components/login/headerLogin";
import AppRegister from "../../components/login/register";

function RegisterPage() {
    return (
        <div>
            <HeaderLogin/>
            <AppRegister/>
        </div>
    );
}

export default RegisterPage;