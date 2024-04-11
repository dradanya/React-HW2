import React from "react";
import "./main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningEmoji: null,
    };
  }

  handleShowResults = () => {
    const { emojiClicks } = this.props;
    let maxClicks = -1;
    let winningEmoji = null;
    
    for (const emoji in emojiClicks) {
      if (emojiClicks[emoji] > maxClicks) {
        maxClicks = emojiClicks[emoji];
        winningEmoji = emoji;
      }
    }

    this.setState({ winningEmoji: winningEmoji });
  };

  render() {
    const { winningEmoji } = this.state;
    return (
      <div>
        <button className="showResultBtn" onClick={this.handleShowResults}>
          Show results
        </button>
        {winningEmoji && (
          <div className="winningEmoji">Winning Emoji: {winningEmoji}</div>
        )}
      </div>
    );
  }
}

export default Main;
