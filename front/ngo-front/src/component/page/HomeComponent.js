import React from 'react';
import Header from '../utils/header/Header';
import HomeContent from '../utils/homeContent/HomeContent';
import TeamContent from '../utils/teamContent/TeamContent';
import AboutContent from '../utils/aboutContent/AboutContent';
import ContactContent from '../utils/contactContent/ContactContent';
import FloatingButton from '../utils/component/FloatingButton';
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
    onClickRegistrationHandler = () => {
        window.open(window.location.origin+"/ngo-portal/registration", "_blank")
    }
    render() {
        return (
            <Layout className="layout">
                <Header title="Vallinam foundation" onClickTab={this.onClickTabHandler} currentTab={this.state.currentTab}>
                </Header>
                <FloatingButton type="primary" size="large" label="Register Now !" onClickHandler={this.onClickRegistrationHandler}/>
                {this.content()}
            </Layout>
        );
    }
}

export default HomeComponent;