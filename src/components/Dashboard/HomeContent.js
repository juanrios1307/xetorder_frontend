import React from "react";
import '../../assets/css/Dashboard.css';
import { Row, Col } from 'antd';


function HomeContent() {
    return(
        <div className="homeC">
            <Row gutter={[8, 8]}>
                <Col span={12} >Contenido</Col>
                <Col class="colH ant-col" span={12} >Contenido</Col>

                <Col span={12} >Contenido</Col>
                <Col class="colH ant-col" span={12} >Contenido</Col>
            </Row>
        </div>
    );
}

export default HomeContent;