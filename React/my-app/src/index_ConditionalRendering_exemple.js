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

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

class WarningBanner extends React.Component {
    render() {
        if (this.props.hideWarning) {
            return null;
        }

        return (
            <div className="warning">
                Warning !
            </div>
        )
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}

        this.toogleWarning = this.toogleWarning.bind(this);
    }

    toogleWarning() {
        this.setState({
            showWarning: !this.state.showWarning
        })
    }

    render() {
        return (
            <div>
                <WarningBanner hideWarning={!this.state.showWarning} />
                <button onClick={this.toogleWarning}>
                    {this.state.showWarning ? 'Hide warning': 'Show warning'}
                </button>
            </div>
        );
    }
}


const messages = ['message 1', 'message 3', 'message 3'];
ReactDOM.render(
    <div>
        <LoginControl />
        <hr />
        <Mailbox unreadMessages={messages} />
        <hr />
        <Page />
    </div>,
    document.getElementById('root')
);
