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
              <div>
                <div>
                  <input
                    src="text"
                    placeholder="Type your message here"
                    className="input-box"
                    onChange={this.setMessage}
                    value={message}
                  />
                </div>
                <div>
                  <button className="button-red" onClick={this.sendMessage}>
                    Send
                  </button>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                <div>
                  <input
                    src="text"
                    placeholder="Type username here"
                    className="input-box"
                    onChange={this.setUserName}
                    value={userName}
                  />
                </div>
                <div>
                  <button className="button-red" onClick={this.confirmUserName}>
                    Confirm user name
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
