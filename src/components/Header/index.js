import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    const { emojiClicks, handleEmojiClick } = this.props;
    return (
      <div className="header">
        <div
          className="emoji"
          onClick={() => handleEmojiClick("smiley")}
        >
          😊 {emojiClicks.smiley}
        </div>
        <div
          className="emoji"
          onClick={() => handleEmojiClick("heart")}
        >
          ❤️ {emojiClicks.heart}
        </div>
        <div
          className="emoji"
          onClick={() => handleEmojiClick("thumbsUp")}
        >
          👍 {emojiClicks.thumbsUp}
        </div>
      </div>
    );
  }
}

export default Header;
