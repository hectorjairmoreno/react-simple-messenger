import React from "react";
import { withRouter } from "react-router-dom";

class IndexPage extends React.Component {
  state = {
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

  sendMessage = () => {
    const { messages, message } = this.state;
    messages.push({ name: "Joshua", message });
    this.setState({
      messages,
      message: "",
    });
  };
  render() {
    const { messages, message } = this.state;
    return (
      <div className="container">
        <div style={{ textAlign: "center", color: "white" }}>
          {messages.length > 0
            ? messages.map((m, index) => {
                return (
                  <p key={index}>
                    {m.name}:{m.message}
                  </p>
                );
              })
            : null}

          <input src="text" onChange={this.setMessage} value={message} />
          <button className="btn btn-danger" onClick={this.sendMessage}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
