import React from "react";

import '../assets/css/Dashboard.css'
import '../assets/css/App.css'

import Sidebar from "../components/Dashboard/Sidebar";
import HomeContent from "../components/Dashboard/HomeContent";
import Logo from "../assets/images/logo/LOGOS-05.png";

import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Dashboard extends React.Component {
    render() {
        return(
            <div className="ContDash">
                <div className="Dashnav">
                    <div className="logoD">
                        <img src={Logo} alt="logo.png"/>
                    </div>
                    <div className="fdsa">
                        <h3>Otro contenido</h3>
                    </div>
                </div>
                <div className="cont-flex">
                    <Sidebar/>
                    <HomeContent/>
                </div>
            </div>
        )
    }
}

export default Dashboard;