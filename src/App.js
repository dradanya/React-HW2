import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"; // Corrected import path
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiClicks: {
        smiley: 0,
        heart: 0,
        thumbsUp: 0,
      },
    };
  }

  handleEmojiClick = (emoji) => {
    this.setState((prevState) => ({
      emojiClicks: {
        ...prevState.emojiClicks,
        [emoji]: prevState.emojiClicks[emoji] + 1,
      },
    }));
  };

  render() {
    const { emojiClicks } = this.state;
    return (
      <div>
        <div className="header">
          <Header
            handleEmojiClick={this.handleEmojiClick}
            emojiClicks={this.state.emojiClicks}
          />
        </div>

        <div className="main">
          <Main emojiClicks={emojiClicks} />
        </div>
      </div>
    );
  }
}

export default App;
