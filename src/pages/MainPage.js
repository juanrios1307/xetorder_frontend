import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/header";
import AppHero from "../components/hero";
import AppAbout from "../components/about";
import AppFeature from "../components/aFeature";
import AppWorks from "../components/works";
import AppPricing from "../components/princing";
import AppContact from "../components/contact";
import AppFooter from "../components/footer";

import { Layout } from 'antd';
import {Footer} from "antd/es/layout/layout";

const { Header, Content } = Layout;

class MainPage extends Component {

    render(){
        return (
            <Layout className="mainLayout">
                <Header>
                    <AppHeader/>
                </Header>
                <Content>
                    <AppHero/>
                    <AppAbout/>
                    <AppFeature/>
                    <AppWorks/>
                    <AppPricing/>
                    <AppContact/>
                </Content>
                <Footer>
                    <AppFooter/>
                </Footer>
            </Layout>
        );
    }
}
export default MainPage;