import React from 'react';
import Header from '../utils/header/Header';
import { Layout } from 'antd';

class HomeComponent extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header title="Vallinam Foundation" description="NGO Organisation">
                </Header>
            </Layout>
        );
    }
}

export default HomeComponent;