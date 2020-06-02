import React from 'react'
import './floating-button.css';
import '../button.css';

class FloatingButton extends React.Component {
    render() {
        const { icon, text, onClickHandler } = this.props;
        return (
            <button className="btn btn-floating elevation-z8"
                data-testid="btn-floating" onClick={onClickHandler}>
                {icon && (<i className="mat-icon" data-testid="btn-floating-icon">{icon}</i>)}
                <span data-testid="btn-floating-text">{text}</span>
            </button>
        )
    }

}

export default FloatingButton;