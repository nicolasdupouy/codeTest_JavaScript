import React from 'react';
import ReactDOM from 'react-dom';

const GREETING_LOGGED = 'Welcome back !';
const GREETING_UNLOGGED = 'Please sign up.';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        let button = this.state.isLoggedIn 
            ? <LogoutButton clickCallback={this.handleLogoutClick} />
            : <LoginButton clickCallback={this.handleLoginClick} />;

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        );
    }
}

class LoginButton extends React.Component {
    render() {
        return <LabelledButton label={'Login'} clickCallback={this.props.clickCallback} />;
    }
}

class LogoutButton extends React.Component {
    render() {
        return <LabelledButton label={'Logout'} clickCallback={this.props.clickCallback} />;
    }
}

class LabelledButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickCallback}>
                {this.props.label}
            </button>
        );
    }
}

class Greeting extends React.Component {
    render() {
        const greetingMessage = this.props.isLoggedIn ? GREETING_LOGGED: GREETING_UNLOGGED;
        return <h1>{greetingMessage}</h1>;
    }
}

ReactDOM.render(
    <LoginControl />, 
    document.getElementById('root')
);
