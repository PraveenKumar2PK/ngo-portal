import React from 'react';
import Header from '../utils/header/Header';
import HomeContent from '../utils/homeContent/HomeContent';
import TeamContent from '../utils/teamContent/TeamContent';
import AboutContent from '../utils/aboutContent/AboutContent';
import ContactContent from '../utils/contactContent/ContactContent';
import { Layout } from 'antd';

class HomeComponent extends React.Component {   
    state = {
        currentTab: 1
    }
    content = () => {
        switch(this.state.currentTab) {
            case 1:
                return <HomeContent></HomeContent>
            case 2:
                return <AboutContent></AboutContent>
            case 3:
                return <TeamContent></TeamContent>
            case 4:
                return <ContactContent></ContactContent>
            default:
                return <HomeContent></HomeContent>
        }
    }
    onClickTabHandler = (tabId) => {
        this.setState({currentTab: tabId});
    }
    render() {
        return (
            <Layout className="layout">
                <Header title="Vallinam Foundation" description="NGO Organisation" onClickTab={this.onClickTabHandler} currentTab={this.state.currentTab}>
                </Header>
                {this.content()}
            </Layout>
        );
    }
}

export default HomeComponent;