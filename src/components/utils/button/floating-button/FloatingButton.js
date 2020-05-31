import React from 'react'
import './floating-button.css';
import '../button.css';

class FloatingButton extends React.Component {
    render() {
        const { icon, text, onClick } = this.props;
        return (
            <button className="btn btn-floating elevation-z8" onClick={onClick}>
                {icon && (<i className="mat-icon">{icon}</i>)}
                <span>{text}</span>
            </button>
        )
    }

}

export default FloatingButton;