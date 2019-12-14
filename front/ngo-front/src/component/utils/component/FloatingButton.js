import React from 'react';
import { Button } from 'antd';
import * as style from './FloatingButton.module.css';

class FloatingButton extends React.Component {
    render() {
        return (
        <Button className={style.float} type={this.props.type ? this.props.type : 'primary'} size={this.props.size ? this.props.size : 'large'} onClick={this.props.onClickHandler}>{this.props.label}</Button>
        );
    }
}

export default FloatingButton;