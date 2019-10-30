import React from 'react';
import * as styles from './ContactContent.module.css';
import './ContactContent.module.css';
import classes from '../functions/classes';

class ContactContent extends React.Component {
    render() {
        console.log(this.props.style);
        return (
            <div style={this.props.style ? {...this.props.style} : null} className={styles.mainContent}>
                <div>
                    <header>
                        <h2 className={styles.mainTitle}>Contact Us</h2>
                    </header>
                    <div className={styles.parentForm}>
                        <form className={styles.formStyle}>
                            <div class="form-group" className={styles.formGroup}>
                                <input type="text" id="contact_name" name="contact_name" className={classes([styles.formControl,styles.formInput])} placeholder="Name" required=""/>
                            </div>
                            <div class="form-group" className={styles.formGroup}>
                                <input type="email" id="contact_email" name="contact_email" className={classes([styles.formControl,styles.formInput])} placeholder="Email" required=""/>
                            </div>
                            <div class="form-group" className={styles.formGroup}>
                                <textarea id="contact_message" name="contact_message" className={classes([styles.formControl,styles.formInput])} rows="8" placeholder="Message" required=""></textarea>
                            </div>
                            <button disabled className="formButton">Submit</button>
                        </form>
                        <div className={classes([styles.formStyle,styles.mainTitle])}>
                            <header>
                                <h2>Mailing Address:</h2>
                                <div>
                                    <p className={styles.textClass}>
                                        Vallinam foundation,
                                        <br/>
                                        5/25, O.jedarpalayam post,
                                        <br/>
                                        Rasipuram, Namakkal – 637406.
                                        <br/>
                                        Phn.No:- 7845181074, 7418853538.
                                    </p>
                                </div>
                                <h2>Email:</h2>
                                <p className={styles.textClass} title={'vallinamfondation@gmail.com'}>vallinamfondation@gmail.com</p>
                                <h2>Website:</h2>
                                <p className={styles.textClass} title={'www.vallinamfoundation.com'}>www.vallinamfoundation.com</p>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactContent;