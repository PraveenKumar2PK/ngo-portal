import React from 'react';
import * as styles from './Header.module.css';

class Header extends React.Component {
    render() {
        console.log(this.props.style);
        return (
            <div style={this.props.style ? {...this.props.style} : null} className={styles.header}>
                <h1 className={styles.headerTitle}>{this.props.title}</h1>
                <p className={styles.headerDescription}>{this.props.description}</p>
            </div>
        );
    }
}

export default Header;