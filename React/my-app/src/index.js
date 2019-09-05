import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
        // or
        //this.setState(state => ({isToggleOn: !state.isToggleOn}));
    }
}

ReactDOM.render(
    <Toggle />, 
    document.getElementById('root')
);
