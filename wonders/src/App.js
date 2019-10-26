import React, { Component } from "react";
import WondersCard from "./components/WondersCard";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import wonders from "./wonders.json";

class App extends Component {
  // Setting this.state.wonders to the wonders json array
  state = {
    wonders,
    score: 0,
    topScore: 0
  };

  // function gets called when the page loads
  componentDidMount() {
    // reorders the dataarray on state changes
    this.setState({ wonders: this.shuffleDeck(this.state.wonders) });
  }

  // shuffle the imported data array in random order
  shuffleDeck = wonders => {
    let newWonders = wonders.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return newWonders;
  };

  // resets all the clicked properties to false
  resetDeck = wonders => {
    const resetData = wonders.map(item => ({ ...item, clicked: false }));
    // console.log(data);
    // console.log(resetData);
    return this.shuffleDeck(resetData);
  };

  // checks to see if score is higher than the topscore then updates the state with the update array
  correctGuess = newWonders => {
    let newScore = this.state.score;
    newScore++;
    let newTopScore = Math.max(newScore, this.state.topScore);

    this.setState({
      wonders: this.shuffleDeck(newWonders),
      score: newScore,
      topScore: newTopScore,
      animation: "animated swing"
    });
  };

  // restarts the game with fresh data
  wrongGuess = newData => {
    this.setState({
      wonders: this.resetDeck(newData),
      score: 0
    });
  };

  // when a card is clicked, check if it has been clicked before,
  // then update that cards clicked property
  gameCardClick = id => {
    let guessedCorrectly = false;
    // newData will be the data array with updated clicked properties
    const newWonders = this.state.wonders.map(wonder => {
      if (wonder.id === id) {
        if (!wonder.clicked) {
          wonder.clicked = true;
          guessedCorrectly = true;
        }
      }
      return wonder;
    });
    // if guessedCorrectly = true, run the correctGuess function,
    // else run the wrongGuess function
    guessedCorrectly
      ? this.correctGuess(newWonders)
      : this.wrongGuess(newWonders);
  };

  // Map over this.state.wonders and render a WonderCard component for each friend object
  render() {
    return (
      <div className="back">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Container>
          <Wrapper>
            {this.state.wonders.map(wonder => (
              <div className="animated pulse">
                <WondersCard
                  id={wonder.id}
                  key={wonder.id}
                  name={wonder.name}
                  image={wonder.image}
                  animate={!this.state.score && this.state.topScore}
                  clicked={wonder.clicked}
                  handleClick={this.gameCardClick}
                />
              </div>
            ))}
          </Wrapper>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
