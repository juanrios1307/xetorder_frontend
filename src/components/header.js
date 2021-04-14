import React, { useState } from "react";

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
      <div className="container-fluid">
          <div className="header">
              <div className="logo">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <a href="http://www.google.com">Xeta Order</a>
              </div>
              <div className="mobileHidden">
                  <Anchor targetOffset="65">
                      <Link href="#hero" title="Home" />
                      <Link href="#about" title="¿Quiénes somos?" />
                      <Link href="#feature" title="¿Qué ofrecemos?" />
                      <Link href="#works" title="Demo" />
                      <Link href="#pricing" title="Membresías" />
                      <Link href="#contact" title="Contacto" />
                      <Link href="/login" refresh="true" title="Iniciar Sesión" />
                  </Anchor>
              </div>
              <div className="mobileVisible">
                  <Button type="primary" onClick={showDrawer}>
                      <i className="fas fa-bars"></i>
                  </Button>
                  <Drawer
                      placement="right"
                      closable={false}
                      onClose={onClose}
                      visible={visible}
                  >
                      <Anchor targetOffset="65">
                          <Link href="#hero" title="Home" />
                          <Link href="#about" title="Quiénes somos" />
                          <Link href="#feature" title="Qué ofrecemos" />
                          <Link href="#works" title="Demo" />
                          <Link href="#pricing" title="Membresías" />
                          <Link href="#contact" title="Contacto" />
                          <Link href="/login" refresh="true" title="Iniciar Sesión" />
                      </Anchor>
                  </Drawer>
              </div>
          </div>
      </div>
    );
}

export default AppHeader;