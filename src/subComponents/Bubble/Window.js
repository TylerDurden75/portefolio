import React, { Component } from "react";
import Bubble from "./Bubble";

class Stage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bubbleCount: 16,
      popped: 0,
      ready: false,
    };

    this.getRandomPosition = this.getRandomPosition.bind(this);
    this.popBubble = this.popBubble.bind(this);
    this.animateBubble = this.animateBubble.bind(this);
    this.renderBubbles = this.renderBubbles.bind(this);
    this.ready = this.ready.bind(this);
    this.init = this.init.bind(this);
  }

  componentDidUpdate() {
    if (this.state.popped < 1) {
      this.init();
    }
  }

  init() {
    const bubbles = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubbles.length; i++) {
      this.animateBubble(bubbles, i);
    }
  }

  ready() {
    this.setState({
      ready: true,
    });
  }

  renderBubbles() {
    return [...Array(this.state.bubbleCount)].map((x, i) => (
      <Bubble key={i} pop={this.popBubble} />
    ));
  }

  getRandomPosition() {
    const randomX = Math.floor(Math.random() * 99);
    const randomY = Math.floor(Math.random() * 99);
    return [randomX, randomY];
  }

  animateBubble(bubbles, i) {
    const bubble = bubbles[i];
    const xy = this.getRandomPosition(bubble);

    Object.assign(bubble.style, {
      top: xy[0] + "%",
      left: xy[1] + "%",
      zIndex: i,
      animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s",
    });

    bubble.classList.add("animating");
  }

  popBubble(e) {
    const bubble = e.target;
    const audio = document.getElementById("pop");
    bubble.classList.remove("animating");
    bubble.classList.add("popped");
    audio.play();
    this.setState({
      popped: this.state.popped + 1,
    });
    window.setTimeout(function () {
      bubble.style.display = "none";
    }, 500);
  }

  render() {
    const { popped, ready, bubbleCount } = this.state;
    return (
      <>
        <div className="stage" id="stage">
          <audio
            id="pop"
            src="https://uploads.codesandbox.io/uploads/user/e75d21d3-e2a7-4d7a-bd14-09ebe09ee6b0/JMLB-pop.mp3"
          />
          <span className="score">
            Score : {popped} / {bubbleCount}
          </span>
          {ready ? (
            this.renderBubbles()
          ) : (
            <button id="ready" onClick={this.ready}>
              Ready
            </button>
          )}
          {bubbleCount === popped ? (
            <div id="congrat">👏Congratulation👏</div>
          ) : null}
        </div>
      </>
    );
  }
}

export default Stage;
