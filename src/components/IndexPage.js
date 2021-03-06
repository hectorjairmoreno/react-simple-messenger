import React from "react";
import { withRouter } from "react-router-dom";

class IndexPage extends React.Component {
  state = {
    userName: "",
    userNameConfirmed: false,
    message: "",
    messages: [
      {
        name: "John",
        message: "How are you guys?",
      },
      {
        name: "Peter",
        message: "Anyone eating out today?",
      },
      {
        name: "Jason",
        message: "Maybe",
      },
      {
        name: "Joshua",
        message: "Burgers?",
      },
      {
        name: "Tyler",
        message: "After 1pm",
      },
      {
        name: "Mike",
        message: "I have a meeting at 1pm",
      },
    ],
  };

  setMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  setUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  sendMessage = () => {
    const { messages, message, userName } = this.state;
    messages.push({ name: userName, message });
    if (message.length === 0) {
      return null;
    }
    this.setState({
      messages,
      message: "",
    });
  };

  confirmUserName = () => {
    this.setState({
      userNameConfirmed: true,
    });
  };
  render() {
    const { messages, message, userName, userNameConfirmed } = this.state;
    return (
      <div className="messenger-box">
        <div style={{ textAlign: "center", color: "white" }}>
          {messages.length > 0
            ? messages.map((m, index) => {
                return (
                  <p key={index}>
                    {m.name}:&nbsp; {m.message}
                  </p>
                );
              })
            : null}

          {userName.length > 0 && userNameConfirmed ? (
            <React.Fragment>
              <input
                src="text"
                placeholder="Type your message here"
                onChange={this.setMessage}
                value={message}
              />
              <button
                className="btn btn-danger border-button"
                onClick={this.sendMessage}
              >
                Send
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input
                src="text"
                placeholder="Type username here"
                onChange={this.setUserName}
                value={userName}
              />
              <button
                className="btn btn-primary border-button"
                onClick={this.confirmUserName}
              >
                Confirm user name
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
