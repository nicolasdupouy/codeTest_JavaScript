import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

function formatDate(date) {
  return date.toLocaleDateString();
}

class UserInfo extends React.Component {
  render() {
    return  <div className="UserInfo">
              <Avatar user={this.props.user} />
              <div className="UserInfo-name">
                {this.props.user.name}
              </div>
            </div>
  }
}
class Avatar extends React.Component {
  render() {
     return <img className="Avatar"
          src={this.props.user.avatarUrl}
          alt={this.props.user.name}
        />
  }
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();