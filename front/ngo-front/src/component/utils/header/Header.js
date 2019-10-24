import React from 'react';
import { Icon } from 'antd';
import * as styles from './Header.module.css';
import classes from '../functions/classes';
import './Header.module.css';

class Header extends React.Component {
    state = {
        buttonMenuOpen: false
    }
    onClickTabHandler = (event) =>  {
        let tabValues = [1,2,3,4]
        let value = parseInt(event.target.getAttribute('value'));
        if(tabValues.indexOf(value) !== -1 ){
            this.props.onClickTab(value);
        }
    }
    onClickMenuButtonHandler = (event) => {
        this.setState((prevState)=>{
            return {buttonMenuOpen:!prevState.buttonMenuOpen}
        })
    }
    render() {
        var { currentTab } = this.props;
        return (
            <div style={this.props.style ? {...this.props.style} : null} className={styles.header}>
                
                <h1 className={styles.headerTitle}>{this.props.title}</h1>
                <p className={styles.headerDescription}>{this.props.description}</p>
                <div className={styles.navButtonTab}>
                    <button className={styles.navbarToggler} onClick={this.onClickMenuButtonHandler}>
                        <Icon type="menu"></Icon>
                    </button>
                    <div className={this.state.buttonMenuOpen ? styles.navbarCollapse : styles.navbarHide}>
                        <ul className={styles.mainNavUl}>
                            <li className={styles.navItem}>
                                <div className={classes([styles.navLink,currentTab === 1 ? styles.activeTab : ''])} value={1} onClick={this.onClickTabHandler} href="/home">Home</div>
                            </li>
                            <li className={styles.navItem}>
                                <div className={classes([styles.navLink,currentTab === 2 ? styles.activeTab : ''])} value={2} onClick={this.onClickTabHandler} href="/home">About</div>
                            </li>
                            <li className={styles.navItem}>
                                <div className={classes([styles.navLink,currentTab === 3 ? styles.activeTab : ''])} value={3} onClick={this.onClickTabHandler} href="/home">Our Team</div>
                            </li>
                            <li className={styles.navItem}>
                                <div className={classes([styles.navLink,currentTab === 4 ? styles.activeTab : ''])} value={4} onClick={this.onClickTabHandler} href="/home">Contact Us</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;