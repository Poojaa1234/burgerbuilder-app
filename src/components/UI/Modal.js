import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../UI/Backdrop';
import { render } from 'react-dom';

class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show
    }
   
    render(){
    return(
        <>
        <Backdrop clicked={this.props.clicked} show={this.props.show}/>
        <div className="Modal"
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-200vh)'
        }}>
            {this.props.children}
        </div>
        </>
    )
}
}

export default Modal;