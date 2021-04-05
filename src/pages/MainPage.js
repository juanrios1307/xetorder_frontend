import React,{Component} from 'react';
import '../assets/css/App.css';
import 'antd/dist/antd.css';

import AppHeader from "../components/header";
import AppHero from "../components/hero";
import AppAbout from "../components/about";
import AppFeature from "../components/aFeature";
import AppWorks from "../components/works";
import AppPricing from "../components/princing";

import { Layout } from 'antd';

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
                </Content>
            </Layout>
        );
    }
}
export default MainPage;