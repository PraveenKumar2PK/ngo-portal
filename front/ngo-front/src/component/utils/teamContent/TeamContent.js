import React from 'react';
import * as styles from './TeamContent.module.css';
import './TeamContent.module.css';

class TeamContent extends React.Component {
    render() {
        console.log(this.props.style);
        return (
            <div style={this.props.style ? {...this.props.style} : null} className={styles.mainContent}>
                <div>
                    <header>
                        <h2 className={styles.mainTitle}>Welcome to NGO Team</h2>
                    </header>
                    <p className={styles.mainPara   }>
                        DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit,
                        voluntary citizens' group which is organized on a local, national or international level.
                        Some are organized around specific issues, such as human rights, environment or health.
                    </p>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default TeamContent;