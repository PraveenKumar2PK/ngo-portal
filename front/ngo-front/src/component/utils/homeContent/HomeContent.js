import React from 'react';
import * as styles from './HomeContent.module.css';
import './HomeContent.module.css';

class Content extends React.Component {
    render() {
        console.log(this.props.style);
        return (
            <div className={styles.mainContent}>
                <div>
                    <p className={styles.mainPara}>
                        DEFINITION OF NGOs. A non-governmental organization (NGO) is any non-profit,
                        voluntary citizens' group which is organized on a local, national or international level.
                        Some are organized around specific issues, such as human rights, environment or health.
                    </p>
                </div>
            </div>
        );
    }
}

export default Content;