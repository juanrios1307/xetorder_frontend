import React from "react";
import {Menu} from "antd";

function AppHeader() {
    return (
      <div className="container-fluid">
          <div className="header">
              <div className="logo">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <a href="http://www.google.com">Xeta Order</a>
              </div>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                      <Menu.Item key="home">Home</Menu.Item>
                      <Menu.Item key="about">¿Quiénes somos?</Menu.Item>
                      <Menu.Item key="services">¿Qué ofrecemos?</Menu.Item>
                      <Menu.Item key="pricing">Membresías</Menu.Item>
                      <Menu.Item key="login">Iniciar Sesión</Menu.Item>
                      <Menu.Item key="shop">Comprar</Menu.Item>
                  </Menu>
          </div>
      </div>
    );
}

export default AppHeader;