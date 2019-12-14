import React from 'react';
import RegistartionForm from './RegistrationForm';
import * as style from './Registration.module.css';

class Registartion extends React.Component {

  render() {
    return (
      <div className={style.mainDiv}>
          <h1 className={style.headerDiv}> Registration Form </h1>
          <RegistartionForm/>
      </div>
    );
  }
}

export default Registartion;